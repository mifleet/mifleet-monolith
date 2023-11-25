import { InMemoryBearerTokenAuthProvider } from "../../core/fleetManagement/users/infraestructure/BearerTokenAuthProvider";
import { InMemoryUserRepository } from "../../core/fleetManagement/users/infraestructure/InMemoryUserRepository";
import { MockUuidGenerator } from "../../core/shared/infraestructure/MockUuidGenerator";

export const userRepository = new InMemoryUserRepository()
export const uuidGenerator = new MockUuidGenerator();
export const authProvider = new InMemoryBearerTokenAuthProvider(userRepository);

