import { UuidGenerator } from "../../../../../core/shared/application/adapters/UuidGenerator"
import { UserRepository } from "../adapters/UserRepository"
import { User } from "../../domain/model/User"
import { Result } from "../../../../../core/shared/utils/Result"

export class RegisterUserUseCase{

    constructor(private readonly userRepository : UserRepository, private readonly uuidGenerator : UuidGenerator){}

    async execute(data : {name : string, email : string, firstName : string, lastName : string, password : string}){
        try{
            const id = await this.uuidGenerator.generate()
            const user = User.teacher({
                id,
                firstName : data.firstName,
                lastName :  data.lastName,
                email : data.email,
            })
            await this.userRepository.save(user)
            return Result.ok(user)
        }catch(err){
            return Result.fail(err)
        }
    }

}