const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

app.get('/register', (req, res) => {
    res.json('test ok');
});

app.listen(4000);