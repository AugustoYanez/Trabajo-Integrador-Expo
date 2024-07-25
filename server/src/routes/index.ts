import { Router } from "express";
import auth from "./auth";
import user from "./user";
import mascota from "./mascota"
const router = Router();

router.use('/api',auth);
router.use('/user', user);
router.use('/mascotas', mascota);
export default router;