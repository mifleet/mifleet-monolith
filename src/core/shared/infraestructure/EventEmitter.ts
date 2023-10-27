export interface EventEmitter {
    emit(event: DomainEvent): void;
    on(event: string, listener: (event: DomainEvent) => void): void;
}
