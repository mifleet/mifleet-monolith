import { InMemoryBearerTokenAuthProvider } from "src/core/fleetManagement/users/infraestructure/BearerTokenAuthProvider";
import { InMemoryUserRepository } from "src/core/fleetManagement/users/infraestructure/InMemoryUserRepository";
import { MockUuidGenerator } from "src/core/shared/infraestructure/MockUuidGenerator";

export const userRepository = new InMemoryUserRepository()
export const uuidGenerator = new MockUuidGenerator();
export const authProvider = new InMemoryBearerTokenAuthProvider(userRepository);

