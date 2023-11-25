import { Request, Response } from 'express';
import { authProvider, userRepository, uuidGenerator } from '../../dependencies';
import { RegisterUserUseCase } from '../../../../core/fleetManagement/users/application/useCases/RegisterUserUseCase';
import { createApiResponse } from '../../utils';

export const registerView = async (req : Request, res : Response) => {
    const { username, password, firstName, lastName } = req.body;
    const useCase = new RegisterUserUseCase(userRepository, uuidGenerator, authProvider);
    const result =  await useCase.execute({
        name : username,
        email : username,
        firstName,
        lastName,
        password
    })
    createApiResponse(res, result)
  }