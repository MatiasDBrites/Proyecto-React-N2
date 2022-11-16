const express = require('express');
const morgan = require('morgan');

const app = express();

app.use = (morgan('dev'));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

module.exports = app;