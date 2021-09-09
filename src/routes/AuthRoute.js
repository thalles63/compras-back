const AuthController = require('../Controllers/AuthController');

module.exports = (app) => {
    app.post('/api/login', AuthController.login);
}