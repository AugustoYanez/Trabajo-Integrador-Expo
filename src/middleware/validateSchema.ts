import { Request as IReq, Response as IRes, NextFunction} from 'express';
import { Schema } from 'zod';

const validate = (schema: Schema) => (req: IReq, res: IRes, next:NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        })
        next();
    } catch (err) {
        return res.status(400).send(err)
    }
}