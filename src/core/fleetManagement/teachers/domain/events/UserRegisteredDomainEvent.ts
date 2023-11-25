import { DomainEvent } from "src/core/shared/domain/DomainEvent";

export class UserRegisteredDomainEvent extends DomainEvent{
    public static slug  = "fleetManagement.user.registered"

    constructor(
        public readonly id : string,
        public readonly firstName : string,
        public readonly lastName : string,
        public readonly email : string
    ){
        super("fleetManagement", "user", "registered");
    }
}
