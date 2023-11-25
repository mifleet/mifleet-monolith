import { Request, Response } from 'express';
import { authProvider, userRepository, uuidGenerator } from '../../dependencies';
import { RegisterUserUseCase } from '../../../../core/fleetManagement/users/application/useCases/RegisterUserUseCase';
import { createApiResponse } from '../../utils';
import * as join from 'joi'

const schema = join.object({
    email: join.string().required(),
    password: join.string().required(),
    firstName: join.string().required(),
    lastName: join.string().required(),
})

export const registerView = async (req : Request, res : Response) => {
    const { value, error } = schema.validate(req.body);
    if(error) return res.status(400).send({error : error.message})
    const useCase = new RegisterUserUseCase(userRepository, uuidGenerator, authProvider);
    const result =  await useCase.execute(value)
    createApiResponse(res, result)
  }