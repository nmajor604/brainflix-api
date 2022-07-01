const express = require('express');
const router = require("express").Router();
const videos = require('../data/videos.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



console.log('Videos', videos)

router.get('/', (req, res) => {
    
    res.send(videos);
  });
  
router.get('/:id', (req, res) => {
      const {
          params: {
            id
          }
        } = req;
        
        let parsedVideos = videos.find(({ id: currentVideoId }) => id === currentVideoId);
        res.json(parsedVideos);
        console.log('ParsedVideos', parsedVideos);
    });
  
router.post('/', (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;

    let newVideo = {
      id: uuidv4(),
      title,
      channel: 'User Upload',
      image: "https://i.imgur.com/0hi3N4B.jpg",
      description,
      views: "0",
      likes: "0",
      duration: "3:31",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: '00:00:00',
      comments: ''
    };

    console.log('newvideo', newVideo);
    const newVideoString = JSON.stringify(newVideo);
    fs.writeFile('../data/videos.json', newVideoString, (err) => {
      if (err) {
        res.status(403).json("error, not found");
      }
      console.log('New video uploaded')
  
    });
  
    res.json(newVideoString);
  });
  
module.exports = router;