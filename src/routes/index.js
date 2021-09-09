const UsuarioRoute = require('./UsuarioRoute');
const AuthRoute = require('./AuthRoute');

module.exports = (app) => {
    UsuarioRoute(app);
    AuthRoute(app);
}