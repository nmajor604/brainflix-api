const express = require('express');
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const videos = __dirname + './data/videos.json';

const cors = require('cors');

const videoRoutes = require('./routes/videos.js');

app.use('./routes/videos', videoRoutes);

app.use(express.json());
// app.use(express.static('public/images'));
app.use(cors());



app.listen(PORT, () => {
    console.log('Server Started on http://localhost: ' + PORT);
    console.log('Press CTRL + C to stop server');
});