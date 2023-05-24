const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.post('/criaAssinante', assinanteController.criar);
router.get('/assinantes', assinanteController.listar);
router.get('/:id', assinanteController.buscarPorId);
router.put('/:id', assinanteController.atualizar);
router.delete('/:id', assinanteController.excluir);

module.exports = router;
