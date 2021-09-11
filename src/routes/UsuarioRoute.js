const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
    app.get('/api/usuarios', UsuarioController.get);
    app.get('/api/usuario/:id', UsuarioController.getById);
}