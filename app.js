const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the moon");
  next();
});

app.use((req, res, next) => {
  console.log("in another moon");
  res.send("hello");
});

const server = http.createServer(app);

server.listen(3000);
