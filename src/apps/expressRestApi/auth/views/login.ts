import { Request, Response, Router } from 'express';
import { authProvider } from '../../dependencies';
import { FindUserTokenUseCase } from '../../../../core/fleetManagement/users/application/useCases/FindUserTokenUseCase';
import { createApiResponse } from '../../utils';
import * as join from 'joi'

const schema = join.object({
    email: join.string().required(),
    password: join.string().required()
})

export const loginView = async (req : Request, res : Response) => {
    const { error, value } = schema.validate(req.body);
    if(error)  return res.status(400).send({error : error.message})
    const useCase = new FindUserTokenUseCase(authProvider)
    const result =  await useCase.execute(value.email, value.password)
    createApiResponse(res, result)
  }