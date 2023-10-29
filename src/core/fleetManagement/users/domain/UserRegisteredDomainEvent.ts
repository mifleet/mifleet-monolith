import { DomainEvent } from "../../../../core/shared/domain/DomainEvent";

export class UserRegisteredDomainEvent extends DomainEvent{
    public static slug  = "fleetManagement.user.registered"

    constructor(
        public readonly id : number,
        public readonly email : string,
        public readonly firstName : string,
        public readonly lastName : string
    ){
        super("fleetManagement", "user", "registered");
    }
}
