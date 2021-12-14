var express = require("express");
var app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  // res.send("Hello Express")
  console.log(`${__dirname}/views/index.html`);
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE = "uppercase";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res, next) => {
  const word = req.params.word;
  res.json({ echo: word });
});

const nameHandler = (req, res, next) => {
  const first = req.query.first;
  const last = req.query.last;

  res.json({ name: `${first} ${last}` });
};

app.route("/name").get(nameHandler).post(nameHandler);

app.use("/public", express.static(`${__dirname}/public`));

module.exports = app;
