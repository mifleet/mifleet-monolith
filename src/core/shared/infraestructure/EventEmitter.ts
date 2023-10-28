import { DomainEvent } from "../domain/DomainEvent";

export interface EventEmitter {
    emit(event: DomainEvent): void;
    on(event: string, listener: (event: DomainEvent) => void): void;
}
