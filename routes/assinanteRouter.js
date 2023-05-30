const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.post('/criaAssinante', assinanteController.criarAssinante);
router.get('/assinantes', assinanteController.listarUsuarios);
router.get('/buscarPorId/:id', assinanteController.listarUsuarioPorCodigo);
router.get('/buscarNome/:nome', assinanteController.buscarAssinantePorNome);
router.get('/buscarSobrenome/:sobrenome', assinanteController.buscarAssinantePorSobrenome);
router.get('/buscarCidade/:cidade', assinanteController.buscarAssinantePorCidade);
router.get('/buscarEstado/:estado', assinanteController.buscarAssinantePorEstado);
router.get('/buscarStatus/:status', assinanteController.buscarAssinantePorStatus);
router.put('/atualizarAssinante/:id', assinanteController.atualizarAssinante)
router.delete('/deletar/:id', assinanteController.deletarUsuario);

module.exports = router;
