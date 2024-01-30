const express = require('express');
const app = express();
const port = 3000;

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