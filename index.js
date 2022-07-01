const express = require('express');
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const videos = __dirname + './data/videos.json';

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const videoRoutes = require('./routes/videos.js');
app.use(express.json());
app.use('/videos', videoRoutes);


app.use('/videos', videoRoutes);


// app.use(express.static('public/images'));



app.use((req, res ) => {
  res.status(404).send("Sorry can't find that!")
  
});

app.listen(PORT, () => {
    console.log('Server Started on http://localhost: ' + PORT);
    console.log('Press CTRL + C to stop server');
});

