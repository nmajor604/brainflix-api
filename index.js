// initialize Express in project
const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public/images'));
app.use(cors());

app.get('/api/v1/students', (req, res) => {
  res.json(videos);
});

app.get('/api/v1/students/:id', (req, res) => {
    const {
        params: {
          id
        }
      } = req;
    
      videos = videos.filter(({ id: currentVideoId }) => id === currentVideoId);
      return res.json(videos);
  });

app.post('/api/v1/students', (req, res) => {
  const { name, program, grade } = req.body;

  videos.push({
    id: uuidv4(),
    title,
    description,
    grade,
  });

  res.json(videos);
});

app.delete('/api/v1/students/:id', (req, res) => {
    const {
      params: {
        id
      }
    } = req;
  
    videos = videos.filter(({ id: currentVideoId }) => id !== currentVideoId);
    return res.json(videos);
  });

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});