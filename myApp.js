var express = require("express");
var app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express")
  console.log(`${__dirname}/views/index.html`)
  res.sendFile(`${__dirname}/views/index.html`)
})

module.exports = app;
