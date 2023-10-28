import { DomainEvent } from "../domain/DomainEvent";

export interface EventBus {
    publish(event: DomainEvent): void;
    publishMultiple(event: DomainEvent[]): void;
    on(event: string, listener: (event: DomainEvent) => void): void;
}
