import { DomainEvent } from "./DomainEvent";
import { Entity } from "./Entity";

export class AggregateRoot extends Entity {
    private domainEvents: DomainEvent[] = [];

    constructor() {
        super();
        this.domainEvents = [];
    }
    record(event: DomainEvent) {
        this.domainEvents.push(event);
    }
    pullDomainEvents() {
        const domainEvents = this.domainEvents;
        this.domainEvents = [];
        return domainEvents;
    }
}
