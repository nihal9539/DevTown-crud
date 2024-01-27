import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./Routes/userRoutes.js"
import taskRoute from "./Routes/taskRoute.js"
import cors from "cors"
import AWS from 'aws-sdk'


const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

AWS.config.update({
    region: 'your-dynamodb-region',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
mongoose.connect(process.env.MONGO_DB).then((res)=>{
    console.log("MongoDb connected");

   app.listen(process.env.PORT,(res)=>
   {
    console.log(`connected at ${process.env.PORT}`);
   })
}).catch((err)=>{
    console.log(err);
})

app.use('/auth',userRoute)
app.use('/task',taskRoute)