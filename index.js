// initialize Express in project
const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public/images'));
app.use(cors());

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

// const express = require('express');
// const app = express();
// const port = process.env.PORT || process.argv[2] || 8080;
// const { v4: uuidv4 } = require('uuid');
// const cors = require('cors');

// app.use(express.json());
// app.use(cors());

// let students = [
//   {
//     id: '5dbb3dd8-49d8-4c3b-93d9-59230836b2f1',
//     name: 'Brynhildr Sadler',
//     program: 'Web Dev',
//     grade: 75,
//   },
//   {
//     id: '594daba3-e1e4-4a5f-89ae-372dfb95a16d',
//     name: 'Joan Leon',
//     program: 'UX',
//     grade: 72,
//   },
//   {
//     id: '9c05b68b-e51b-42ce-8b89-10f8aa32db2b',
//     name: 'Mark Summers',
//     program: 'Web Dev',
//     grade: 87,
//   },
//   {
//     id: '5c49d6a0-74a2-4202-af90-204ef0e35fbc',
//     name: 'Tanja Zawisza',
//     program: 'Web Dev',
//     grade: 92,
//   },
//   {
//     id: '23e91f79-f553-4f4f-88ac-09070cb38ac1',
//     name: 'Slavomir Amato',
//     program: 'UX',
//     grade: 78,
//   },
//   {
//     id: '1c4b7c42-23af-4168-aced-f87cb02f5172',
//     name: 'Tihana Anand',
//     program: 'UX',
//     grade: 60,
//   },
//   {
//     id: '86a81142-b6dc-422b-9d55-7bbc04aa012c',
//     name: 'Reima Ivov',
//     program: 'Web Dev',
//     grade: 95,
//   },
//   {
//     id: '8d8b7afa-8896-44cb-9bb7-bc21beda4fd5',
//     name: 'Demokritos Shafir',
//     program: 'UX',
//     grade: 83,
//   },
// ];

// app.get('/api/v1/students', (req, res) => {
//   res.json(students);
// });

// app.post('/api/v1/students', (req, res) => {
//   const { name, program, grade } = req.body;

//   students.push({
//     id: uuidv4(),
//     name,
//     program,
//     grade,
//   });

//   res.json(students);
// });

// app.delete('/api/v1/students/:id', (req, res) => {
//   res.json(students);
// });

// app.listen(port, () => console.log(`Listening on ${port}`));
