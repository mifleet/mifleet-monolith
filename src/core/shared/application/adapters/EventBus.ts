    import { DomainEvent } from "../domain/DomainEvent";

    export interface EventBus {
        publish(event: DomainEvent[]): Promise<void>;
    on(event: string, listener: (event: DomainEvent) => void): void;
}
