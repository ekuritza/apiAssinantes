const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.post('/criaAssinante', assinanteController.criarAssinante);
router.get('/assinantes', assinanteController.listarUsuarios);
router.get('/buscarPorId/:id', assinanteController.listarUsuarioPorCodigo);
router.get('/filtrarAssinante', assinanteController.filtrarAssinante);
router.put('/atualizarAssinante/:id', assinanteController.atualizarAssinante)
router.delete('/deletar/:id', assinanteController.deletarUsuario);

module.exports = router;
