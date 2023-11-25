import { Request, Response, Router } from 'express';
import { authProvider } from '../../dependencies';
import { FindUserTokenUseCase } from '../../../../core/fleetManagement/users/application/useCases/FindUserTokenUseCase';
import { createApiResponse } from '../../utils';

export const loginView = async (req : Request, res : Response) => {
    const { username, password } = req.body;
    const useCase = new FindUserTokenUseCase(authProvider)
    const result =  await useCase.execute(username, password)
    createApiResponse(res, result)
  }