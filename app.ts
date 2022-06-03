import express = require("express")
import {Application, json} from "express";
import {userRoutes} from "./userRouter";
const cors = require("cors");
const app: Application = express()
app.use(json())
app.use(cors());
app.use("/computers/",userRoutes);
app.listen(5000, () =>{
    console.log('Connected')
})