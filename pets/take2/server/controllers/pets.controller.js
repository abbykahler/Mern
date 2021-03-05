const Pet = require("../models/pets.models");

module.exports = {
    create(req, res) {
        Pet.create(req.body)
            .then((pet) => {res.json(pet)})
            .catch((err) => {res.status(400).json(err)});
    },

    getAll(req, res) {
        Pet.find().then((pets) => {res.json(pets)})
            .catch((err) => {res.json(err);});
    },

    getOne(req, res) {
        Pet.findById(req.params._id)
            .then((pet) => {res.json(pet)})
            .catch((err) => {res.json(err);});
    },

    update(req, res) {
        Pet.findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((pet) => {res.json(pet)})
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Pet.findByIdAndDelete(req.params._id)
            .then((pet) => {res.json(pet)})
            .catch((err) => {res.json(err)});
    },
};