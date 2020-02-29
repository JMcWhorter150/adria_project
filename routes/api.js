var express = require('express');
var router = express.Router();
const axios = require('axios');




router.get('/giphy', async (req, res) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.APIKEY}&tag=miss you&rating=R`;
  const result = await axios.get(url);
  res.json(result.data.data);
});

module.exports = router;