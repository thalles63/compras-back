const ConfigsModel = require('../models/Configs');

exports.getByUser = async (req, res) => {
    const user = req.params.user;
    const configs = await ConfigsModel.findOne({ 'usuario': user });
    res.status(200).send(configs);
};

exports.put = async (req, res) => {
    const id = req.params.id;
    const novo = req.body;
    await ConfigsModel.updateOne({ _id: id }, novo);
    res.status(200).send();
};