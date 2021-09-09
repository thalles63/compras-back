const UsuarioModel = require('../models/Usuario');
const crypto = require('crypto');
const secret = process.env.SECRET;
 
exports.post = async (req, res, next) => {
   const hash = crypto.createHmac('sha256', secret)
       .update(req.body.password)
       .digest('hex');
   const usuario = await UsuarioModel.create({
       ...req.body,
       password: hash
   });
   res.status(200).send(usuario);
};

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const novo = req.body;
    await UsuarioModel.updateOne({ _id: id }, novo);
    const usuario = await UsuarioModel.findOne({ _id: id });
    res.status(200).send(usuario);
};

exports.delete = async (req, res, next) => {
    let id = req.params.id;
    await UsuarioModel.deleteOne({ _id: id });
    res.status(200).send({ deleted: true });
};

exports.get = async (req, res, next) => {
    let usuarios = await UsuarioModel.find({}, {password: 0});
    res.status(200).send(usuarios)
};

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const usuario = await UsuarioModel.findOne({ _id: id });
    res.status(200).send(usuario);
};