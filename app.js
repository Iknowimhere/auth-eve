import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { db } from './config/db.js'
import userRouter from './routes/userRoutes.js'
db()

let app=express()

//middlewares
app.use(express.json())

//base route
app.use("/api/v1/users",userRouter)

export default app;