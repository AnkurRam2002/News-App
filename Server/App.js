const express = require('express');
const newsRoutes = require('./routes/news');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

module.exports = app;
