export abstract class ValueObject<T> {
    protected readonly value: T;

    constructor(value: T) {
        this.validate();
        this.value = value;
    }

    public validate(): void {
    }

    public getValue(): T {
        return this.value;
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        return this.value === vo.value;
    }
}
