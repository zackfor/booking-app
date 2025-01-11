import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


//app.get('/register', (req, res) => {
//    res.json('test ok');
//});

app.post("/register", async (req, res) => {
    const {name, email, password} = req.body;

    try {

        const existingEmail = await User.findOne({email});
        if (existingEmail) {
            return res.status(400).json({error: "email is already in use"});
        }

        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });


    
        res.json(userDoc);
    
    } catch (error) {
        res.status(500).json({error: "Error creating user"});
    }
});

    

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});