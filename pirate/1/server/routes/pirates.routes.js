const piratesController = require("../controllers/pirates.controller");

module.exports = (app) => {
    app.post('/api/pirates', piratesController.create);
    app.get('/api/pirates', piratesController.getAll);
    app.get('/api/pirates/:_id', piratesController.getOne);
    app.put('/api/pirates/:_id', piratesController.update);
    app.delete('/api/pirates/:_id', piratesController.delete);
};