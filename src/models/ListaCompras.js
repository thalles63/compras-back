const { Schema, model } = require('mongoose');

const ListaComprasSchema = new Schema({
    descricao: {
        type: String,
        required: true,
    },
    checado: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('ListaCompras', ListaComprasSchema);