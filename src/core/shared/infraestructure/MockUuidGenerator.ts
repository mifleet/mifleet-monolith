import { UuidGenerator } from "../application/adapters/UuidGenerator";

export class MockUuidGenerator implements UuidGenerator{
    public async generate(): Promise<string> {
        //create random string of 32 characters each time different
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
