import express from 'express'
import bcrypt from 'bcryptjs'
import User from "../models/User.js"

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
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.status(401).json({message: "Invalid credentials !"})
    }
    res.json({message: "Login successful !!!"})
})

export default router;