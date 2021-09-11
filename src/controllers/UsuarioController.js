const UsuarioModel = require('../models/Usuario');

exports.get = async (req, res, next) => {
    let usuarios = await UsuarioModel.find({}, {password: 0});
    res.status(200).send(usuarios)
};

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const usuario = await UsuarioModel.findOne({ _id: id });
    res.status(200).send(usuario);
};