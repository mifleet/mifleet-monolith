import { Result } from "../../../../../core/shared/utils/Result";
import { AuthProvider } from "../adapters/AuthProvider";

export class FindUserTokenUseCase{
    constructor(private provider: AuthProvider<{token : string}>) {}

    async execute(email : string, password : string) : Promise<Result<{ token: string; }, string>> {
        try{
            const user = await this.provider.findCredentials(email, password)
            return Result.ok(user.value);
        }catch(err){
            return Result.fail(err)
        }
            
    }
}