const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middleware/Auth').auth;

module.exports = (app) => {
    app.post('/api/usuario', auth, UsuarioController.post);
    app.put('/api/usuario/:id', auth, UsuarioController.put);
    app.delete('/api/usuario/:id', auth, UsuarioController.delete);
    app.get('/api/usuarios', UsuarioController.get);
    app.get('/api/usuario/:id', UsuarioController.getById);
}