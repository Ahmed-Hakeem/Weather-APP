// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Start up an instance of app
const app = express();
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("dist"));

app.get("/projectData", (req, res) => {
  res.status(200).send(projectData);
});

app.post("/projectData", (req, res) => {
  projectData = req.body;
  res.status(200).send({
    success: true,
    message: "Data posted successfully",
    data: projectData,
  });
});
app.post("/photo", (req, res) => {
  projectData.picture = req.body.picture;
  res.status(200).send({
    success: true,
    message: "Data posted successfully",
    data: projectData.picture,
  });
});

// Setup Server
const port = 8000;
const hostname = "127.0.0.1";
const server = app.listen(port, hostname, () =>
  console.log(`Server running on http://${hostname}:${port}`)
);

module.exports = server;
