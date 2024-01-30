const express = require('express');
const app = express();
const port = 3000;

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({success: true, data: ideas});
});

// Get id
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if(!idea) {
    res.status(404).json({success: false, data: 'Resource not found.'})
  } else {
    res.json({success: true, data: idea});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});