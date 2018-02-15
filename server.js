//Get the package
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Reservation Data
// ===========================================================


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/app", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/app", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


app.get("/api/reservations", function (req, res) { // /api shows that we are in the data page
    res.send(reservations);
});

app.post("/api/new", function (req, res) {
    var newReservation = req.body;
    reservations.push(newReservation);
    res.json(newReservation);
});