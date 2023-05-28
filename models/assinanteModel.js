const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    dataNascimento: String,
    telefone: Number,
    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    status: Boolean
});

module.exports = mongoose.model('assinantes', assinanteSchema);
