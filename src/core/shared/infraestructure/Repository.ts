import { Criteria } from "./Criteria";

export interface Repository<T> {
    add(entity: T): void;
    remove(entity: T): void;
    update(entity: T): void;
    find(id: string): T;
    findAll(): T[];
    findByCriteria(criteria: Criteria): T[];
    findByIds(ids: number | string[]): T[];
}
