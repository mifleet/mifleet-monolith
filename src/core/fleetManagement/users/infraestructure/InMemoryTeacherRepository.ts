import { InMemoryRepository } from "src/core/shared/infraestructure/InMemoryRepository";
import { TeacherRepository } from "../application/adapters/TeacherRepository";
import { Teacher } from "../domain/model/Teacher";

export class InMemoryTeacherRepository extends InMemoryRepository<Teacher> implements TeacherRepository{
    isTeacherRegistered(email: string): Promise<boolean> {
        return new Promise((resolve, reject) => {   
            const owner = this.items.find((owner) => {
                return owner.email === email;
            });
    
            resolve(owner !== undefined);
        })
    }

    findByEmail(email: string): Promise<Teacher> {
        return new Promise((resolve, reject) => {   
            const owner = this.items.find((owner) => {
                return owner.email === email;
            });
    
            resolve(owner);
        })
    }
    findByEmailAndPassword(email: string, password: string): Promise<Teacher> {
        return new Promise((resolve, reject) => {   
            const owner = this.items.find((owner) => {
                return owner.email === email && owner.password === password;
            });
    
            resolve(owner);
        })
    }
}
