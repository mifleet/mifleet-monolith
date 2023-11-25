import { MockUuidGenerator } from "../../../../core/shared/infraestructure/MockUuidGenerator";
import { InMemoryUserRepository } from "../infraestructure/InMemoryUserRepository";
import { RegisterUserUseCase } from "../application/useCases/RegisterUserUseCase";

describe("RegisterUserUseCase", () => {
    it("should register a new user", async () => {
        // Arrange
        const userRepository = new InMemoryUserRepository();
        const uuidGenerator = new MockUuidGenerator();
        const registerUserUseCase = new RegisterUserUseCase(userRepository, uuidGenerator);
        const userData = {
            name: "John Doe",
            email: "johndoe@example.com",
            firstName: "John",
            lastName: "Doe",
            password: "password123",
        };

        const result = await registerUserUseCase.execute(userData);
        expect(result.isOk()).toBe(true);
        expect(result.getValue).toBeDefined();
    });
});
