import { EventBus } from "src/core/shared/application/adapters/EventBus";
import { UserRepository } from "../adapters/UserRepository";
import { User } from "../../domain/User";

export class UserRegistrar {

    public constructor(
        private readonly userRepository: UserRepository,
        private readonly bus: EventBus
    ) { }

    public async registrar(email: string, firstName: string, lastName: string): Promise<void> {
        const isUserRegistered = await this.userRepository.isUserRegistered(email);
        if (isUserRegistered) throw new Error("User already registered");

        const user = User.create(null, email, firstName, lastName);
        await this.userRepository.save(user);
        await this.bus.publish(user.pullDomainEvents());
    }

}

