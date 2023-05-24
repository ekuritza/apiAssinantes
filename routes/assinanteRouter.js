const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', assinanteController.criar);
router.get('/', assinanteController.listar);
router.get('/:id', assinanteController.buscarPorId);
router.put('/:id', assinanteController.atualizar);
router.delete('/:id', assinanteController.excluir);

module.exports = router;
