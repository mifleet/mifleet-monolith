export class DomainEvent {
    constructor(
                public readonly boundedContext: string,
                public readonly aggregate: string,
                public readonly eventName: string,
        ){
        }

    public get slug() : string{
        return `${this.boundedContext}.${this.aggregate}.${this.eventName}`;
    }
}
