import { Request as IReq, Response as IRes } from 'express';

import { Usuario } from "../models/auth.models";
import { CustomRequest, Payload } from '../middleware/validateToken';

export const darAdopcion = async (req: IReq, res: IRes) => {
    res.send('Adopcion exitosa')
    
}