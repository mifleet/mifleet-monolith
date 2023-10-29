import { EventBus } from "../application/adapters/EventBus";
import { DomainEvent } from "../domain/DomainEvent";

export class InMemoryEventBus implements EventBus{
    private readonly listeners: Map<string, ((event : DomainEvent) => void)[]>;

    constructor() {
        this.listeners = new Map<string, ((event : DomainEvent) => void)[]>();
    }

    publish(event: DomainEvent[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            // biome-ignore lint/complexity/noForEach: <explanation>
            event.forEach(e => {
                console.log(`Event published: ${JSON.stringify(e)}`);
                const listeners = this.listeners.get(e.eventName);
                // biome-ignore lint/complexity/noForEach: <explanation>
                listeners?.forEach(listener => listener(e));
            });
            resolve();
        });
    }
    register(eventName : string, listener: (event: DomainEvent) => void): void {
        if (this.listeners.has(eventName)) {
            const listeners = this.listeners.get(eventName);
            listeners?.push(listener);
        } else {
            this.listeners.set(eventName, [listener]);
        }
    }

}

