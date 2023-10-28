export enum OrderType {
    ASC = "ASC",
    DESC = "DESC"
}

// biome-ignore lint/complexity/noStaticOnlyClass: its a factory class and it should be static
export class OrderTypeFactory {
    public static from(orderType: string): OrderType {
        return OrderType[orderType as keyof typeof OrderType];

    }
}
