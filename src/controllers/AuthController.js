const UsuarioModel = require('../models/Usuario');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');

    const usuario = await UsuarioModel.findOne({ username, password: hash });
    if (usuario) {
        const token = jwt.sign({ userId: usuario._id }, secret);
        res.send({ auth: true, token })
    } else {
        res.status(401).send({ auth: false, error: 'Nome ou senha inválidos.' })
    }
};