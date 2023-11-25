import { NextFunction, Request, Response  } from 'express';
import { authProvider, userRepository } from '../dependencies';
import { Result } from '../../../core/shared/utils/Result';
import { AuthenticateUserUseCase } from 'src/core/fleetManagement/users/application/useCases/AuthenticateUserUserCase';
import {Credential} from '../../../core/fleetManagement/users/domain/model/Credential';

export const authenticateUserMiddleware = (req : Request , res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    const useCase = new AuthenticateUserUseCase(authProvider, userRepository)
    const result = useCase.execute(new Credential({token : token}));
    next();
};

export const isAuthenticatedOnly = (req : Request , res: Response, next: NextFunction) => {
    if(!req.user) res.send(Result.fail("You must be authentificated to access here"));
    next()
};
