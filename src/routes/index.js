const UsuarioRoute = require('./UsuarioRoute');
const AuthRoute = require('./AuthRoute');
const ListaComprasRoute = require('./ListaComprasRoute');
const ConfigsRoute = require('./ConfigsRoute');

module.exports = (app) => {
    UsuarioRoute(app);
    AuthRoute(app);
    ListaComprasRoute(app);
    ConfigsRoute(app);
}