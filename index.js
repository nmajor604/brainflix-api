const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const fs = require('fs');
const videos = require('./data/videos.json')


app.use(express.json());
app.use(express.static('public/images'));
app.use(cors());

app.get('/videos', (req, res) => {
  res.json(videos);
});

app.get('/videos/:id', (req, res) => {
    const {
        params: {
          id
        }
      } = req;
    
      const videosList = videos.filter(({ id: currentVideoId }) => id === currentVideoId);
      return res.json(videosList);
  });

app.post('/videos/:id', (req, res) => {
  const { title, description } = req.body;

  videos.push({
    id: uuidv4(),
    title,
    description
  });

  res.json(videos);
});

app.delete('/:id', (req, res) => {
    const {
      params: {
        id
      }
    } = req;
  
    videos = videos.filter(({ id: currentVideoId }) => id !== currentVideoId);
    return res.json(videos);
  });

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});