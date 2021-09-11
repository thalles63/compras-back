const UsuarioRoute = require('./UsuarioRoute');
const AuthRoute = require('./AuthRoute');
const ListaComprasRoute = require('./ListaComprasRoute');

module.exports = (app) => {
    UsuarioRoute(app);
    AuthRoute(app);
    ListaComprasRoute(app);
}