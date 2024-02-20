//jshint esversion:6
const express = require("express");
// ALSO to start just do npm start app.js
// Create Express app
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Connect to MongoDB
const DB = require(__dirname + "/DBMethods.js");

const { MongoClient } = require("mongodb");

const uri = "Your uri";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
}
connectToDatabase();

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
