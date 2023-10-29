import { EventBus } from "../application/adapters/EventBus";
import { DomainEvent } from "../domain/DomainEvent";
import { DomainEventSubscriber } from "../domain/DomainEventSubscriber";

export class InMemoryEventBus implements EventBus {
    private readonly subscriptions: Map<string, Function[]> = new Map();

    constructor(subscribers: DomainEventSubscriber<DomainEvent>[]) {
        this.registerSubscribers(subscribers);
    }

    async publish(events: DomainEvent[]): Promise<void> {
        const executions: unknown[] = [];

        // biome-ignore lint/complexity/noForEach: <explanation>
        events.forEach((event) => {
            const subscribers = this.subscriptions.get(event.slug);

            if (subscribers) {
                // biome-ignore lint/complexity/noForEach: <explanation>
                subscribers.forEach((subscriber) => {
                    executions.push(subscriber(event));
                });
            }
        });

        await Promise.all(executions).catch((error) => {
            console.error("Executing subscriptions:", error);
        });
    }

    private registerSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {
        // biome-ignore lint/complexity/noForEach: <explanation>
        subscribers.forEach((subscriber) => {
            // biome-ignore lint/complexity/noForEach: <explanation>
            subscriber.subscribedTo().forEach((event) => {
                this.subscribe(event.slug, subscriber);
            });
        });
    }

    private subscribe(topic: string, subscriber: DomainEventSubscriber<DomainEvent>): void {
        const currentSubscriptions = this.subscriptions.get(topic);
        const subscription = subscriber.on.bind(subscriber);

        if (currentSubscriptions) {
            currentSubscriptions.push(subscription);
        } else {
            this.subscriptions.set(topic, [subscription]);
        }
    }
}
