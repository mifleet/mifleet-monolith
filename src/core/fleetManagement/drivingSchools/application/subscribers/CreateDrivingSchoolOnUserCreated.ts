import { DomainEventSubscriber } from "src/core/shared/domain/DomainEventSubscriber";
import { DomainEventName } from "src/core/shared/domain/DomainEventName";
import { UserRegisteredDomainEvent } from "src/core/fleetManagement/users/domain/UserRegisteredDomainEvent";

export class CreateDrivingSchoolOnUserCreated implements DomainEventSubscriber<UserRegisteredDomainEvent>{
    async on(domainEvent: UserRegisteredDomainEvent): Promise<void> {
        console.log("create driving school");
        console.log(`send email to ${domainEvent.email}`);
    }
    subscribedTo(): DomainEventName<UserRegisteredDomainEvent>[] {
        return [UserRegisteredDomainEvent];
    }
}
