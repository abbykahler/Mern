const petController = require("../controllers/pets.controller");

module.exports = (app) => {
    app.post('/api/pet/new', petController.create);
    app.get('/api/pets', petController.getAll);
    app.get('/api/pet/:_id', petController.getOne);
    app.put('/api/pet/:_id', petController.update);
    app.delete('/api/pet/:_id', petController.delete);
};
