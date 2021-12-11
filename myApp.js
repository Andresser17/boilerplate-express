// require("dotenv").config();
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express")
  console.log(`${__dirname}/views/index.html`);
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/json", (req, res) => {
  // process.env.MESSAGE_STYLE = "uppercase"
  // if (process.env.MESSAGE_STYLE === "uppercase") {
  //   res.json({ message: "HELLO JSON" });
  // } else {
  //   res.json({ message: "Hello json" });
  // }
  res.send(process.env.MESSAGE_STYLE)
});

app.use("/public", express.static(`${__dirname}/public`));

module.exports = app;
