const { Schema, model } = require('mongoose');

const ConfigsSchema = new Schema({
    porcentagem: {
        type: Number,
        required: true,
    },
    usuario: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = model('Configs', ConfigsSchema);