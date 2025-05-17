import express from "express";
import loginModel from "../models/loginModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/profile", async (req, res) => {
    const auth = req.header("authorization");
  const decoded= jwt.verify(auth.split(" ")[1], "secret key")

  res.json(decoded);
});

router.post("/register", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    res.json(await loginModel.create(req.body));
});

router.post("/login", async (req, res) => {
    const user = await loginModel.findOne({username: req.body.username})
   if(!user){
    res.json("username not found");
   }
   if(!await bcrypt.compare(req.body.password, user.password)){
    res.status(401).json("Password does not match")
   }
    
    res.json(jwt.sign({userid: user.id}, "secret key", {expiresIn: '1m'}))
});

export default router;