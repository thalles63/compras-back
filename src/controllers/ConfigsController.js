const ConfigsModel = require('../models/Configs');
const UsuarioModel = require('../models/Usuario');

exports.getByUser = async (req, res) => {
    const user = req.params.user;
    const configs = await ConfigsModel.findOne({ 'usuario': user });
    res.status(200).send(configs);
};

exports.put = async (req, res) => {
    const id = req.params.id;
    const novo = req.body;

    let usuarios = await UsuarioModel.find({}, {password: 0});

    usuarios.forEach(async (usuario) => {
        if (usuario._id.toString() === novo.usuario) {
            await ConfigsModel.updateOne({ id: id }, novo);
        } else {
            const newPorcentagem = {};
            newPorcentagem.porcentagem = 100 - novo.porcentagem;
            newPorcentagem.usuario = usuario._id.toString();
            await ConfigsModel.updateOne({ usuario: usuario._id.toString() }, newPorcentagem);
        }
    });


    res.status(200).send();
};