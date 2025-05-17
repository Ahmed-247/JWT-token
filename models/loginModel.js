import mongoose from "mongoose";

const schema = mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const loginModel = mongoose.model("Login", schema);

export default loginModel;