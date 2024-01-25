import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })


export const loginUser =  (userData) =>  API.post('/auth/login',userData)
export const registerUser =  (userData) =>  API.post('/auth/register',userData)