import { EventBus } from "src/core/shared/application/adapters/EventBus";
import { UserRepository } from "../adapters/UserRepository";
import { User } from "../../domain/User";
import { UuidGenerator } from "src/core/shared/application/adapters/UuidGenerator";
import { Result } from "src/core/shared/utils/Result";

export class UserRegistrar {

    public constructor(
        private readonly userRepository: UserRepository,
        private readonly bus: EventBus,
        private readonly uuidGenerator : UuidGenerator
    ) {
    }

    public async registrar(email: string, firstName: string, lastName: string): Promise<Result<User, string[]>> {
        const isUserRegistered = await this.userRepository.isUserRegistered(email);
        if (isUserRegistered) return Result.fail(["User already registered"]);

        const uuid = await this.uuidGenerator.generate();
        const user = User.create(uuid, firstName, lastName, email);
        await this.userRepository.save(user);
        await this.bus.publish(user.pullDomainEvents());

        return Result.ok(user);
    }

}

