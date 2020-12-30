const express = require('express');
const app = express()
const connectDB = require('./config/db')

// Connect Database
connectDB()

// Init Middlware
app.use(express.json({ extended: false }));

app.use('/', require('./routes/home'));

app.get('/test', (req, res) => res.send('test route successful'))

// Define routes for Contact Keeper app - contactKeeper
app.use('/contactKeeper/users', require('./routes/contactKeeper/users'));
app.use('/contactKeeper/auth', require('./routes/contactKeeper/auth'));
app.use('/contactKeeper/contacts', require('./routes/contactKeeper/contacts'));

// Define routes for IT Logger app - itLogger
app.use('/itLogger/logs', require('./routes/itLogger/logs'));
app.use('/itLogger/techs', require('./routes/itLogger/techs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We got action - Server started on port ${PORT} - An ACTION1`));