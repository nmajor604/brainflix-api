const express = require('express');
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const fs = require('fs');
const videoRoutes = require('./routes/videos');

app.use('/routes/videos', videoRoutes);

app.use(express.json());
// app.use(express.static('public/images'));
app.use(cors());



app.listen(PORT, () => {
    console.log('Server Started on `${PORT}`');
    console.log('Press CTRL + C to stop server');
});