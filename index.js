import express from "express";
import mongoose from "mongoose";
import loginRoute from "./routes/loginRoute.js"

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/JWT-Token"),

mongoose.connection.once("connected", ()=> console.log("DatabASE CONNECTEd"));
mongoose.connection.on("error", ()=> console.log("Connection failed"));

app.use("/", loginRoute)

app.listen(2400);