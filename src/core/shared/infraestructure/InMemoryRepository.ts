import { Repository } from "../application/adapters/Repository";
import { Criteria } from "../domain/criteria/Criteria";

export class InMemoryRepository<T extends {id : string}>  implements Repository<T>{
    private readonly entities: T[] = [];

    save(entity: T): Promise<void> {
        return new Promise((resolve, reject) => {
            this.entities.push(entity);
            resolve();
        });
    }
    remove(entity: T): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.entities.indexOf(entity);
            if (index > -1) {
                this.entities.splice(index, 1);
            }
            resolve();
        });
    }
    update(entity: T): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.entities.indexOf(entity);
            if (index > -1) {
                this.entities[index] = entity;
            }
            resolve();
        });
    }
    find(id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const entity = this.entities.find(entity => entity.id === id);
            resolve(entity);
        });
    }
    findAll(): Promise<T[]> {
        return new Promise((resolve, reject) => {
            resolve(this.entities);
        });
    }
    matching(criteria: Criteria): Promise<T[]> {
        throw Error("Not implemented");
    }

    findByIds(ids: string[]): Promise<T[]> {
        return new Promise((resolve, reject) => {
            const entities = this.entities.filter(entity => ids.includes(entity.id));
            resolve(entities);
        });
    }
}
