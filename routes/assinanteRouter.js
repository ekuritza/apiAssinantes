const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.get('/assinantes', assinanteController.listarUsuarios);
router.get('/:id', assinanteController.listarUsuarioPorCodigo);
router.put('/:id', assinanteController.listarUsuariosPorFiltro);
router.delete('/:id', assinanteController.deletarUsuario);

module.exports = router;
