import { NextFunction, Request, Response  } from 'express';
import { authProvider, userRepository } from '../dependencies';
import { Result } from '../../../core/shared/utils/Result';
import {Credential} from '../../../core/fleetManagement/users/domain/model/Credential';
import { AuthenticateUserUseCase } from '../../../core/fleetManagement/users/application/useCases/AuthenticateUserUserCase';

export const authenticateUserMiddleware = async (req : Request , res: Response, next: NextFunction) => {
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];
        const useCase = new AuthenticateUserUseCase(authProvider, userRepository)
        const result = await useCase.execute(new Credential({token : token}));
        if(result.isOk()) req.user = result.getValue()
    }catch(error){
    }
    next();
};

export const isAuthenticatedOnly = (req : Request , res: Response, next: NextFunction) => {
    if(!req.user) res.send(Result.fail("You must be authentificated to access here"));
    next()
};
