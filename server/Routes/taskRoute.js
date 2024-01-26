import express from "express";
import { deleteTask, getTask, taskCreate } from "../Controllers/taskController.js";


const routes  = express.Router()

routes.post('/create/:id',taskCreate)
routes.get('/get/:id',getTask)
routes.delete('/delete/:id',deleteTask)

export default routes