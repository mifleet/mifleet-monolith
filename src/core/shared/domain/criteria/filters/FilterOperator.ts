export enum FilterOperator { 
    eq = "eq",
    neq = "neq",
    gt = "gt",
    gte = "gte",
    lt = "lt",
    lte = "lte",
    in = "in",
    nin = "nin",
    contains = "contains",
    ncontains = "ncontains",
    between = "between",
    nbetween = "nbetween",
    isnull = "isnull",
    notnull = "notnull",
    isempty = "isempty",
    notempty = "notempty",
    ismissing = "ismissing",
    notmissing = "notmissing",
}

// biome-ignore lint/complexity/noStaticOnlyClass: Its a factory so its going to have only static methods
export  class FilterOperatorFactory{
    public static from(operator : string) : FilterOperator{
        return FilterOperator[operator as keyof typeof FilterOperator];
    }
}
