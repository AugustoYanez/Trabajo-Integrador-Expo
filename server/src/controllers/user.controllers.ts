import { Request as IReq, Response as IRes } from 'express';

import { Usuario } from "../models/auth.models";
import { CustomRequest, Payload } from '../middleware/validateToken';

export const perfil = async (req: IReq, res: IRes) => {
    const {email} = (req as CustomRequest).payload as Payload
    const found = await Usuario.findOne({email})
    res.status(200).json(found)

    
}