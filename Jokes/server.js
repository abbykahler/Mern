const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./server/routes/jokes.routes.js');

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/',routes);

// const AllMyJokeRoutes = require("./server/routes/jokes.routes.js");
// AllMyJokerRoutes(app);

app.listen(8000, () => console.log("The server is port 8000"));

module.exports = app;