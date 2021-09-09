const AuthController = require('../controllers/AuthController');

module.exports = (app) => {
    app.post('/api/login', AuthController.login);
}