import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Signup Route
router.post('/signup', async (req,res)=>{
    const { name , email , password }=req.body;

    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
    
    
})

// Login Route
router.post('/login',async(req,res)=>{

    try{
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({ message: 'Invalid credentials email' });
    }
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({
        message: 'Login successful'
    })
    }catch(err){
    res.status(500).json({ message: 'Server error', error: err.message });
}
})

export default router;