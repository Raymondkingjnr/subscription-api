import {Router} from "express";
import {getAllUsers, getUser} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUser)

userRouter.post('/', (req, res) =>{
    res.send({title: 'create new user'})
})
userRouter.put('/:id', (req, res) =>{
    res.send({title: 'update user'})
})
userRouter.delete('/:id', (req, res) =>{
    res.send({title: 'delete user'})
})

export  default  userRouter;