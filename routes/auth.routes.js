import {Router} from 'express';
import {SignIn, SignOut, SignUp} from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/sign-up", SignUp)
authRoutes.post("/sign-in", SignIn)
authRoutes.post("/sign-Out", SignOut)


export  default  authRoutes;