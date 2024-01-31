const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Hook up the routes folder
const ideasRouter = require('./routes/ideas');
// Add ideasRouter middleware to 'api/ideas' route.
app.use('/api/ideas', ideasRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});