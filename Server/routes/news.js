const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Route to fetch top headlines
router.get('/top-headlines', async (req, res) => {
  const { category = 'General', page = 1 } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: NEWS_API_KEY,
        category,
        page,
        pageSize: 10,
        country: 'us',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
