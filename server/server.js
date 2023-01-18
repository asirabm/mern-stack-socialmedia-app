import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/posts.js";

const app=express()


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use('/posts',routes)

const PORT=process.env.port||5000
const CONNCETION_URL='mongodb://127.0.0.1:27017/FullStack'

mongoose.connect(CONNCETION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
   app.listen(PORT,()=>console.log(`Server running in ${PORT}`))
   console.log(`connection established sucessfully at ${CONNCETION_URL}`)
 } 
)
.catch((e)=>console.log(e.message))

