import express from 'express';
import dotenv from  'dotenv';
import { connectDB } from './config/db.js';
import User from './models/user.model.js';
import cors from "cors"



dotenv.config();

const app = express();
// 6xLwWN80D5TyfBF4

app.use(cors());

app.use(express.json())



// get all users
app.get("/api/users", async(req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json({success: true, data: users})
    } catch (error) {
        console.log("Error in fetching products")
    }
})


// add user
app.post("/api/users", async(req,res) => {
    const user = req.body;

    if(!user.name || !user.id || !user.email || !user.image || !user.profession){
        return res.status(400).json({success:false, message: "Please provide all fields"})
    }

    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json({success:true, data: newUser})
    } catch (error) {
        console.error("Error in Create User")
        res.status(500).json({success:false, message: "Server Error"});
    }
})

// delete user
app.delete("/api/users/:id", async(req,res) => {
    const {id} = req.params;
    console.log("id:", id)
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "User Deleted"})
    } catch (error) {
        console.log("Error in user delete")
        res.status(400).json({success: false, message: "User not found"})
    }   
})




app.listen(5000, () => {
    connectDB();
    console.log("Sever started at http://localhost:5000")
})