import express from "express";
import { deleteTask, getTask, taskCreate, updateTask } from "../Controllers/taskController.js";


const routes  = express.Router()

routes.post('/create/:id',taskCreate)
routes.get('/get/:id',getTask)
routes.delete('/delete/:id',deleteTask)
routes.put('/update/:id',updateTask)

export default routes