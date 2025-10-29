const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

const cors = require('cors');
app.use(cors());  // Enable CORS so frontend can access this gateway
app.use(express.json());

const USER_SERVICE_URL = 'http://user-service:3000';
const VIDEO_SERVICE_URL = 'http://video-service:3001';

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

app.get('/api/videos', async (req, res) => {
  try {
    const response = await axios.get(`${VIDEO_SERVICE_URL}/videos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching videos');
  }
});

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
