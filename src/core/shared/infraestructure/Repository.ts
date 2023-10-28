import { Criteria } from "../domain/criteria/Criteria";

export interface Repository<T> {
    add(entity: T): void;
    remove(entity: T): void;
    update(entity: T): void;
    find(id: string): T;
    findAll(): T[];
    matching(criteria: Criteria): T[];
    findByIds(ids: number | string[]): T[];
}
