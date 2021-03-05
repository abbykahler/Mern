const Pirate = require("../models/pirates.models");

module.exports = {
    create(req, res) {
        Pirate.create(req.body)
            .then((pirate) => {res.json(pirate)})
            .catch((err) => {res.status(400).json(err)});
    },

    getAll(req, res) {
        Pirate.find().then((pirates) => {res.json(pirates)})
            .catch((err) => {res.json(err);});
    },

    getOne(req, res) {
        Pirate.findById(req.params._id)
            .then((pirate) => {res.json(pirate)})
            .catch((err) => {res.json(err);});
    },

    update(req, res) {
        Pirate.findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((pirate) => {res.json(pirate)})
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Pirate.findByIdAndDelete(req.params._id)
            .then((pirate) => {res.json(pirate)})
            .catch((err) => {res.json(err)});
    },
};