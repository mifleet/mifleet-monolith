export class Credential<T>{

    private _value : T;

    constructor(value : T){
        this._value = value;
    }

    get value() : T{
        return this._value;
    }

    public static create<T>(value : T) : Credential<T>{
        return new Credential<T>(value);
    }

    public static createEmpty<T>() : Credential<T>{
        return new Credential<T>(null as unknown as T);
    }

    public static createFromObject<T>(value : any) : Credential<T>{
        return new Credential<T>(value as T);
    }

    public static createFromJson<T>(value : string) : Credential<T>{
        return new Credential<T>(JSON.parse(value) as T);
    }

    public static createFromJsonArray<T>(value : string) : Credential<T[]>{
        return new Credential<T[]>(JSON.parse(value) as T[]);
    }

    public static createFromArray<T>(value : T[]) : Credential<T[]>{
        return new Credential<T[]>(value);
    }

    public static createFromObjectArray<T>(value : any[]) : Credential<T[]>{
        return new Credential<T[]>(value as T[]);
    }

    public static createFromMap<T>(value : Map<string, T>) : Credential<Map<string, T>>{
        return new Credential<Map<string, T>>(value);
    }

    public static createFromObjectMap<T>(value : any) : Credential<Map<string, T>>{
        return new Credential<Map<string, T>>(value as Map<string, T>);
    }

    public static createFromJsonMap<T>(value : string) : Credential<Map<string, T>>{
        return new Credential<Map<string, T>>(JSON.parse(value) as Map<string, T>);
    }

    public static createFromSet<T>(value : Set<T>) : Credential<Set<T>>{
        return new Credential<Set<T>>(value);
    }

    public static createFromJsonSet<T>(value : string) : Credential<Set<T>>{
        return new Credential<Set<T>>(JSON.parse(value) as Set<T>);
    }

    public static createFromObjectSet<T>(value : any) : Credential<Set<T>>{
        return new Credential<Set<T>>(value as Set<T>);
    }

    public static createFromJsonString(value : string) : Credential<string>{
        return new Credential<string>(JSON.parse(value) as string);
    }
}