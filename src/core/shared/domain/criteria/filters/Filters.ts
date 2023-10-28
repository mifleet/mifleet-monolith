import { Filter } from "./Filter";

export class Filters{

    private readonly filters : Array<Filter>;

    private constructor(filters : Array<Filter>){
        this.filters = filters;
    }

    public static from(filters : Array<Filter>) : Filters{
        return new Filters(filters);
    }

    public getFilters() : Array<Filter>{
        return this.filters;
    }

}
