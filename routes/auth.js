import express from 'express'
import bcrypt from 'bcryptjs'
import User from "../models/User.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

//register
router.post("/register", async (req,res)=>{
    console.log(" ------ ------- ----- hitting register api ---- - -- - -- - - ");
    
    const {email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        email,
        passwordHash: hashedPassword
    });
    res.json({message: "User registered !!!"})
})

//login
router.post("/login", async (req,res) => {
    console.log(" ------ ------- ----- hitting LOGIN api ---- - -- - -- - - ");
    console.log("authorization - ", req.headers.authorization);
    
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.status(401).json({message: "Invalid credentials !"})
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if(!isMatch){
        return res.status(401).json({message: "Invalid credentials !"})
    }

    //creating jwt token
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: 60}
    );

    res.json({message: "Login successful !!!", token})
})

export default router;