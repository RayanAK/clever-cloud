const express = require("express");
var path = require("path");
const app = express();

app.listen(8080, "0.0.0.0");

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.use(express.static(__dirname + "/"));
