//Dependencies
//======================
const express = require("express");
const path = require("path");
const fs = require("fs");

//Sets up the express app
// ==========================
var app = express();
var PORT = 8080;

//Sets up the express app to handle the data parsing
//======================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
//========

//HTML Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// API Routes
app.get("/api/notes", function (req, res) {
  res.json(db);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("APP listening on PORT " + PORT);
});
