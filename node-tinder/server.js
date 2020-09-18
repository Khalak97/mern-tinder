import express from 'express';
import mongoose from 'mongoose';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares

// API
app.get('/', (req, res) => res.status(200).send('It is ok'));

// listener
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`Server is running on localhost:${port}`);
});
