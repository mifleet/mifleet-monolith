import { MockUuidGenerator } from "../../../shared/infraestructure/MockUuidGenerator";
import { InMemoryUserRepository } from "../infraestructure/InMemoryUserRepository";
import { RegisterUserUseCase } from "../application/useCases/RegisterUserUseCase";
import { AuthenticateUserUseCase } from "../application/useCases/AuthenticateUserUserCase";
import { InMemoryBearerTokenAuthProvider } from "../infraestructure/BearerTokenAuthProvider";
import { FindUserTokenUseCase } from "../application/useCases/FindUserTokenUseCase";
import { Credential } from "../domain/model/Credential";
import { before } from "node:test";


describe("RegisterUserUseCase", () => {
    let userRepository;
    let authProvider;
    let uuidGenerator;

    beforeAll(async () => {
        userRepository = new InMemoryUserRepository();
        authProvider = new InMemoryBearerTokenAuthProvider(userRepository);
        uuidGenerator = new MockUuidGenerator();
    })

    it("should register a new user", async () => {
        const userData = {
            name: "John Doe",
            email: "johndoe@example.com",
            firstName: "John",
            lastName: "Doe",
            password: "password123",
        };

        const registerUserUseCase = new RegisterUserUseCase(userRepository, uuidGenerator, authProvider);
        const result = await registerUserUseCase.execute(userData);

        expect(result.isOk()).toBe(true);
        expect(result.getValue).toBeDefined();
        expect(result.getValue().firstName).toEqual("John");
        expect(result.getValue().lastName).toEqual("Doe");

        const users = await userRepository.findAll();

        expect(users[0].id).toEqual(result.getValue().id);
    });
    it("should return a user token using credentials", async () => {
        const useCase = new FindUserTokenUseCase(authProvider);
        const result = await useCase.execute("johndoe@example.com", "password123");
        expect(result.isOk()).toBe(true);
        expect(result.getValue()).toBeDefined();
        expect(result.getValue().token).toBeDefined();
        const userUseCase = new AuthenticateUserUseCase(authProvider, userRepository);
        const user = await userUseCase.execute(Credential.create({token : result.getValue().token}));
        expect(user.isOk()).toBe(true);
    });

    it("should authenticate a user", async () => {
        const getToken = new FindUserTokenUseCase(authProvider);
        const token = (await getToken.execute("johndoe@example.com", "password123")).getValue().token;
        const useCase = new AuthenticateUserUseCase(authProvider, userRepository);
        const result = await useCase.execute(Credential.create({token : token}));
        console.log(result);
        expect(result.isOk()).toBe(true);
        expect(result.getValue()).toBeDefined();
    });
});
