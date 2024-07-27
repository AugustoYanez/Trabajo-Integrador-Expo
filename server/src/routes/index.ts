import { Router } from "express";
import auth from "./auth";
import user from "./user";
const router = Router();

router.use('/api',auth);
router.use('/user', user);
export default router;