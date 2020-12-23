const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send('This / get is working')
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error - Dangit');
  }
});


module.exports = router;
