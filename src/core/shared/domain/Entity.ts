export class Entity{
    public equals(entity?: Entity): boolean {
        if (entity === null || entity === undefined) {
            return false;
        }
        return this === entity;
    }
}
