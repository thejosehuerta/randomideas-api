const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 4000;
const connectDB = require('./config/db');

connectDB();

const app = express();

/*
Express has a built in middleware function called express.static that 
allows us to serve static files from any folder. 
We will use this to serve our production files from the public folder.
*/
// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
  cors({
    origin: ['http://localhost:4000', 'http://localhost:3000'],
    credentials: true,
  })
);

// Hook up the routes folder
const ideasRouter = require('./routes/ideas');
// Add ideasRouter middleware to 'api/ideas' route.
app.use('/api/ideas', ideasRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});