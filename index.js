const express = require('express');
const app = express()

// Init Middlware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We got action - Server started on port ${PORT}`));