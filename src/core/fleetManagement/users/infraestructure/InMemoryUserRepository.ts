import { UserRepository } from "../application/adapters/UserRepository";
import { User } from "../domain/User";

export class InMemoryUserRepository implements UserRepository{

        private readonly users: User[] = [];
    
        public async isUserRegistered(email: string): Promise<boolean> {
            return this.users.some(user => user.email === email);
        }
    
        public async save(user: User): Promise<void> {
            this.users.push(user);
        }

        findByEmail(email: string): Promise<User> {
            return new Promise<User>((resolve, reject) => {
                const user = this.users.find(user => user.email === email);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("User not found"));
                }
            });
        }
        findByEmailAndPassword(email: string, password: string): Promise<User> {
            throw new Error("Method not implemented.");
        }
        remove(entity: User): Promise<void> {
            return new Promise<void>((resolve, reject) => {
                const index = this.users.findIndex(user => user.email === entity.email);
                if (index !== -1) {
                    this.users.splice(index, 1);
                    resolve();
                } else {
                    reject(new Error("User not found"));
                }
            });
        }
        update(entity: User): Promise<void> {
            return new Promise<void>((resolve, reject) => {
                const index = this.users.findIndex(user => user.email === entity.email);
                if (index !== -1) {
                    this.users[index] = entity;
                    resolve();
                } else {
                    reject(new Error("User not found"));
                }
            });
        }
        find(id: string): Promise<User> {
            return new Promise<User>((resolve, reject) => {
                const user = this.users.find(user => user.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("User not found"));
                }
            });
        }
        findAll(): Promise<User[]> {
            return new Promise<User[]>((resolve, reject) => {
                resolve(this.users);
            });
        }
        matching(criteria): Promise<User[]> {
            throw new Error("Method not implemented.");
        }

        findByIds(ids: string[]): Promise<User[]> {
            return new Promise<User[]>((resolve, reject) => {
                const users = this.users.filter(user => ids.includes(user.id));
                if (users.length > 0) {
                    resolve(users);
                } else {
                    reject(new Error("No users found"));
                }
            });
        }
}
