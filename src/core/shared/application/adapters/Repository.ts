import { Criteria } from "../domain/criteria/Criteria";

export interface Repository<T> {
    save(entity: T): Promise<void>;
    remove(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    find(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    matching(criteria: Criteria): Promise<T[]>;
    findByIds(ids: number | string[]): Promise<T[]>;
}
