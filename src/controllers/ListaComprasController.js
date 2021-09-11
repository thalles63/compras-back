const ListaComprasModel = require('../models/ListaCompras');
 
exports.post = async (req, res, next) => {
   const listaItem = await ListaComprasModel.create({
       ...req.body
   });
   res.status(200).send(listaItem);
};

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const novo = req.body;
    await ListaComprasModel.updateOne({ _id: id }, novo);
    const listaItem = await ListaComprasModel.findOne({ _id: id });
    res.status(200).send(listaItem);
};

exports.delete = async (req, res, next) => {
    let id = req.params.id;
    await ListaComprasModel.deleteOne({ _id: id });
    res.status(200).send({ deleted: true });
};

exports.get = async (req, res, next) => {
    let lista = await ListaComprasModel.find({});
    res.status(200).send(lista)
};

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const listaItem = await ListaComprasModel.findOne({ _id: id });
    res.status(200).send(listaItem);
};