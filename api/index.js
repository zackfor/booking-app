const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
const {default: mongoose } = require('mongoose');
require('dotenv').config()

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

    const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
});

app.listen(4000);