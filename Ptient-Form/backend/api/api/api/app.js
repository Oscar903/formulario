"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var ptient_routes = require("./routes/ptient");
var user_routes = require("./routes/user");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
 
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use("/api", ptient_routes);
app.use("/api", user_routes);
module.exports = app;
