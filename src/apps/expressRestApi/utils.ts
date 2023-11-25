import { Result } from "../../core/shared/utils/Result";
import {Response} from 'express'

export const createApiResponse = (res : Response, response : Result<any, string>) => {
    if(response.isOk()) res.send(response.getValue()).status(200);
    else res.send({error : response.getError()}).status(300);
}