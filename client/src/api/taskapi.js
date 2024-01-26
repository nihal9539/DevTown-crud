import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })


export const createTask =  (id,taskData) =>  API.post(`/task/create/${id}`,taskData)
export const getTask =  (id) =>  API.get(`/task/get/${id}`)
export const getOneTask =  (id) =>  API.get(`/task/getOne/${id}`)
export const deleteTask =  (id) =>  API.delete(`/task/delete/${id}`)
export const updateTask =  (id,updateData) =>  API.put(`/task/update/${id}`,updateData)