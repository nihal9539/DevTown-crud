import express from "express";
import { loginUser, registerUser } from "../Controllers/userController.js";


const routes  = express.Router()

routes.post('/login',loginUser)
routes.post('/register',registerUser)

export default routes