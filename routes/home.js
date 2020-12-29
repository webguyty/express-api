const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('<h1>hello world<h1>')
  // try {
  //   res.send('This / get is working')
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send('Server Error - Dangit');
  // }
});


module.exports = router;
