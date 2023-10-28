export class Maybe<T>{
    public static of<T>(value: T): Maybe<T> {
        return new Maybe<T>(value);
    }

    public static none<T>(): Maybe<T> {
        return new Maybe<T>(null);
    }

    private constructor(private readonly value: T) { 
        this.value = value;
    }

    public isNone(): boolean {
        return this.value === null;
    }

    public isSome(): boolean {
        return this.value !== null;
    }

    public getOrElse(defaultValue: T): T {
        return this.isNone() ? defaultValue : this.value;
    }

    public getOrNull(): T {
        return this.value;
    }

    public map<R>(fn: (value: T) => R): Maybe<R> {
        return this.isNone() ? Maybe.none() : Maybe.of(fn(this.value));
    }

    public flatMap<R>(fn: (value: T) => Maybe<R>): Maybe<R> {
        return this.isNone() ? Maybe.none() : fn(this.value);
    }

    public filter(fn: (value: T) => boolean): Maybe<T> {
        return this.isNone() || !fn(this.value) ? Maybe.none() : this;
    }

    public equals(maybe: Maybe<T>): boolean {
        return this.isNone() && maybe.isNone() || this.value === maybe.value;
    }

    public toString(): string {
        return this.isNone() ? "None" : `Some(${this.value})`;
    }

    public toJSON(): T {
        return this.value;
    }

    public static fromJSON<T>(value: T): Maybe<T> {
        return Maybe.of(value);
    }

    public static fromNullable<T>(value: T): Maybe<T> {
        return value === null || value === undefined ? Maybe.none() : Maybe.of(value);
    }

    public static fromUndefined<T>(value: T): Maybe<T> {
        return value === undefined ? Maybe.none() : Maybe.of(value);
    }

    public static fromEmptyString(value: string): Maybe<string> {
        return value === "" ? Maybe.none() : Maybe.of(value);
    }

    public static fromEmptyArray<T>(value: T[]): Maybe<T[]> {
        return value.length === 0 ? Maybe.none() : Maybe.of(value);
    }

    public static fromEmptyObject<T>(value: T): Maybe<T> {
        return Object.keys(value).length === 0 ? Maybe.none() : Maybe.of(value);
    }
}


