const JokeController = require("../controllers/jokes.controller");
const express = require("express");
var app = require('express').Router();

  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneJoke);
  // app.get("/api/jokes/random", JokeController.findOneRandomJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/jokes/update/:id", JokeController.updateJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);

  module.exports = app;

