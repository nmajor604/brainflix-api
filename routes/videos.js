const express = require('express');
const router = require("express").Router();
const videos = require('../data/videos.json');
// console.log('videosJson', videos)
const videoList = []
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

videoList.push(videos);
console.log('VideoList', videoList)

router.get('/videos', (req, res) => {
    
    res.send(videoList);
  });
  
router.get('/videos/:id', (req, res, videoList) => {
      const {
          params: {
            id
          }
        } = req;
        
        let parsedVideos = videoList.find(({ id: currentVideoId }) => id === currentVideoId);
        res.json(parsedVideos);
        console.log('ParsedVideos', parsedVideos);
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
  
    res.json(newVideoString);
  });
  
module.exports = router;