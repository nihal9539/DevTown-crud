import mongoose from "mongoose";
import UserModel from "../Model/userModel.js";
import TaskModel from "../Model/taskModel.js";

export const taskCreate = async (req, res) => {
    console.log("hii");
    const id = req.params.id
    const { title, description, task, date } = req.body;

    try {
        const user = UserModel.findById(id)

        if (user) {
            const newTask = new TaskModel({ userId: id, title: title, description: description, task: task, date: date })

            await newTask.save()
            console.log(newTask);
            res.status(200).json(newTask)
        } else {
            res.status(400).json("not found")

        }

    } catch (error) {
        res.status(500).json(error)

    }

}
export const getTask = async (req, res) => {

    const id = req.params.id
    console.log(id);

    try {
        const user = await TaskModel.find({ userId: id })
        if (user) {

            console.log(user);
            res.status(200).json(user)
        } else {
            res.status(400).json("not found")

        }

    } catch (error) {
        res.status(500).json(error)

    }

}
export const deleteTask = async (req, res) => {

    const id = req.params.id


    try {
        const user = await TaskModel.findById(id)
        if (user) {
            await user.deleteOne()
            res.status(200).json("post delete")
        } else {

            res.status(403).json("Action for hidden")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }

}