const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const YT_API_KEY = process.env.YOUTUBE_API_KEY;

app.post('/api/search', async (req, res) => {
  const query = req.body.query;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${encodeURIComponent(query)}&key=${YT_API_KEY}`;

  try {
    const response = await axios.get(url);
    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: `https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`  // 480x360
    }));
    res.json({ results: videos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch videos");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
