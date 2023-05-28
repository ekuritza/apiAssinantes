const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    dataNascimento: String,
    telefone: String,
    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    status: {
        type: String,
        enum: ['Ativo', 'Inativo']
    }
});

module.exports = mongoose.model('assinantes', assinanteSchema);
