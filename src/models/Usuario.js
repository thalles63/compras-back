const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('Usuarios', UsuarioSchema);