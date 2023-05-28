const assinanteModel = require('..//models/assinanteModel');
class AssinanteController {
    // Listar todos os usuários
    async listarUsuarios(req, res) {
        const usuarios = await assinanteModel.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }

    // Listar um único usuário por Codigo
    async listarUsuarioPorCodigo(req, res) {
        const id = req.params.id;
        try {
            const usuario = await assinanteModel.findOne({ 'id': id});
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ erro: 'Usuário não encontrado!'});
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuário' });
        }
    };

    // Listar usuários por Nome, Sobrenome, Cidade, Estado e Status
    async listarUsuariosPorFiltro(req, res) {
        const { nome, sobrenome, cidade, estado, status } = req.query;
        const filtro = {};
      
        if (nome) {
          filtro.nome = nome;
        }
        if (sobrenome) {
          filtro.sobrenome = sobrenome;
        }
        if (cidade) {
          filtro.cidade = cidade;
        }
        if (estado) {
          filtro.estado = estado;
        }
        if (status) {
          filtro.status = status;
        }

        try {
            const usuarios = await assinanteModel.find(filtro);
            res.status(200).json(usuarios);
          } catch (error) {
            res.status(500).json({ error: 'Erro ao listar usuários' });
          }
    };

    // Deletar um usuário (Deletar do banco)
        async deletarUsuario(req, res) {
            const id = req.params.id;
            const _id = String((await assinanteModel.findOne({ 'id': id }))._id);
            await assinanteModel.findByIdAndRemove(String(_id));
            res.status(200).send({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        };               
}

module.exports = new AssinanteController();

