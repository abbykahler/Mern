const {Tide }= require('../models/tide.models');

module.exports.getAllTides = (_request, response) => {
    Tide.find()
        .then((tide) => response.json(tide))
        .catch((error) => response.json(error))
}

module.exports.createTide = (request, response) => {
    const { name } = request.body;
    Tide.create({
        name,
    })
        .then(tide => response.json(tide))
        .catch(err => response.status(400).json(err));
}