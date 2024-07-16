import { Router } from "express";
import { signup } from "../controllers/userControllers.js";

let userRouter=Router()

//http://localhost:5000/api/v1/users/signup
userRouter.post("/signup",signup)

//http://localhost:5000/api/v1/users/login
// userRouter.post("/login",login)

export default userRouter;