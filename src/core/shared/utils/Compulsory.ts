export class Compulsory<T>{
    private readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    public static of<T>(value: T): Compulsory<T> {
        if (value === null || value === undefined) {
            throw new Error("Value cannot be null or undefined");
        }
        return new Compulsory<T>(value);
    }

    public equals(vo?: Compulsory<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        return this.value === vo.value;
    }
}
