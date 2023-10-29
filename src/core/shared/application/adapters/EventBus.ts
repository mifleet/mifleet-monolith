import { DomainEvent } from "../../domain/DomainEvent";

    export interface EventBus {
        publish(event: DomainEvent[]): Promise<void>;
    }
