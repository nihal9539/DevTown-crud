import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


const app = express()

dotenv.config()


mongoose.connect(process.env.MONGO_DB).then((res)=>{
    console.log("MongoDb connected");

   app.listen(process.env.PORT,(res)=>
   {
    console.log(`connected at ${process.env.PORT}`);
   })
}).catch((err)=>{
    console.log(err);
})