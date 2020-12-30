const express = require('express');
const app = express()
const connectDB = require('./config/db')

// Connect Database
connectDB()

// Init Middlware
app.use(express.json({ extended: false }));

app.use('/', require('./routes/home'));

app.get('/test', (req, res) => res.send('test route successful'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We got action - Server started on port ${PORT} - An ACTION1`));