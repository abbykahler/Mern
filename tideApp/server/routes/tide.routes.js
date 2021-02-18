const TideController = require('../controllers/tide.controller');

module.exports = function(app){
    app.get('/api/tides', TideController.getAllTides);
    app.post('/api/tides', TideController.createTide);
}
