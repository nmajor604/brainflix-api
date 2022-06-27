const express = require('express');
const router = express.Router();
const videos = __dirname + '../data/videos.json';
let fetchedvideos = require('videos');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/videos', (req, res) => {
    res.json(fetchedvideos);
  });
  
router.get('/videos/:id', (req, res) => {
      const {
          params: {
            id
          }
        } = req;
        
        const parsedVideos = fetchedvideos.find(({ id: currentVideoId }) => id === currentVideoId);
        res.json(parsedVideos);
        console.log(parsedVideos);
    });
  
router.post('/videos/:id', (req, res) => {
    console.log('req body', req.body);
    let newVideo = {
      id: uuidv4(),
      title: req.body.title,
      channel: 'User Upload',
      image: "https://i.imgur.com/0hi3N4B.jpg",
      description: req.body.description,
      views: "0",
      likes: "0",
      duration: "3:31",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: '00:00:00',
      comments: ''
    };

    console.log('newvideo', newVideo);
    const newVideoString = JSON.stringify(newVideo);
    fs.writeFile('./data/videos.json', newVideoString, (err) => {
      if (err) {
        res.status(403).json("error, not found");
      }
      console.log('New video uploaded')
  
    });
  
    res.json(videos);
  });
  
module.exports = router;