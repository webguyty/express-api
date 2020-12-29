const express = require('express');
const app = express()

// Init Middlware
app.use(express.json({ extended: false }));

app.use('/', require('./routes/home'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We got action - Server started on port ${PORT} - env vars ${process.env}`));