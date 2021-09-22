const ConfigsController = require('../controllers/ConfigsController');
const auth = require('../middleware/Auth').auth;

module.exports = (app) => {
    app.get('/api/configs/:user', auth, ConfigsController.getByUser);
    app.put('/api/configs/:id', auth, ConfigsController.put);
}