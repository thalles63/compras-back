const ListaComprasController = require('../controllers/ListaComprasController');
const auth = require('../middleware/Auth').auth;

module.exports = (app) => {
    app.post('/api/lista', auth, ListaComprasController.post);
    app.put('/api/lista/:id', auth, ListaComprasController.put);
    app.delete('/api/lista/:id', auth, ListaComprasController.delete);
    app.get('/api/lista', auth, ListaComprasController.get);
    app.get('/api/lista/:id', auth, ListaComprasController.getById);
}