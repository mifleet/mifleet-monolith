import { UuidGenerator } from "../../../../../core/shared/application/adapters/UuidGenerator"
import { UserRepository } from "../adapters/UserRepository"
import { User } from "../../domain/model/User"
import { Result } from "../../../../../core/shared/utils/Result"
import { AuthProvider } from "../adapters/AuthProvider"

export class RegisterUserUseCase{

    constructor(private readonly userRepository : UserRepository, private readonly uuidGenerator : UuidGenerator, private readonly provider : AuthProvider<{token : string}>){}

    async execute(data : {name : string, email : string, firstName : string, lastName : string, password : string}) : Promise<Result<User, string>>{
        try{
            const id = await this.uuidGenerator.generate()
            const user = User.teacher({
                id,
                firstName : data.firstName,
                lastName :  data.lastName,
                email : data.email,
            })
            this
            await this.userRepository.save(user)
            await this.provider.createCredentials(user)
            return Result.ok(user)
        }catch(err){
            return Result.fail(err)
        }
    }

}