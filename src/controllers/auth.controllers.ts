
import { Request as IReq, Response as IRes } from 'express';

export const login = (req: IReq, res: IRes) => {
    res.json({ message: 'Login successful' });
}

export const register = (req: IReq, res: IRes) => {
    res.json({ message: 'User registered successfully' });
}

export const logout = (req: IReq, res: IRes) => {
    res.json({ message: 'User logged out successfully' });
}