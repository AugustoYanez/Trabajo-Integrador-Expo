import jwt, {JwtPayload} from 'jsonwebtoken';
import { Request as IReq, Response as IRes, NextFunction as INext } from 'express';

export interface CustomRequest extends IReq {
    payload: string | JwtPayload;
   }

export const authenticateToken = (req: IReq, res:IRes, next: INext) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET || "secet", (err, user) => {
        if (err) return res.sendStatus(403);
        if (user) {
            (req as CustomRequest).payload = user;
            next();
        } else {
            res.sendStatus(500); // or any other appropriate status code
        }
    });
}