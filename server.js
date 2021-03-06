//Dependencies
//======================
const express = require("express");
const path = require("path");
const fs = require("fs");

//Sets up the express app
// ==========================
const app = express();
const PORT = process.env.PORT || 8080;

// const publicPath = path.resolve(__dirname, "public");
// const dbPath = path.resolve(__dirname, "db");

//Sets up the express app to handle the data parsing
//======================================================
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(publicPath));
app.use(express.json());

//ROUTES
//========

//HTML Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});
app.get("/styles.css", function (req, res) {
  res.sendFile(path.join(__dirname, "styles.css"));
});

// app.get("*", function (req, res) {
//   res.sendFile(path.join(publicPath, "index.html"));
// });

// API Routes
app.get("/api/notes", function (req, res) {
  res.json(db);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("APP listening on PORT " + PORT);
});
