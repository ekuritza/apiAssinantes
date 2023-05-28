const assinanteModel = require('../models/assinanteModel');


class AssinanteController {

  async criarAssinante(req, res) {
    try {
      const novoAssinante = new assinanteModel(req.body);
      await novoAssinante.save();
      res.status(201).json(novoAssinante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar assinante' });
    }
  }


    async listarUsuarios(req, res) {
        const usuarios = await assinanteModel.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar assinantes' });
    }


    async listarUsuarioPorCodigo(req, res) {
        const id = req.params.id;
        try {
            const usuario = await assinanteModel.findOne({ 'id': id});
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ erro: 'Assinante não encontrado!'});
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar assinante' });
        }
    };


    async filtrarAssinante(req, res) {
      try {
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
        
        const resultado = await assinanteModel.find(filtro);
        res.status(200).json(resultado);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar assinante' });
      }
    }

    async atualizarAssinante(req, res) {
      const id = req.params.id;
      const _id = String((await assinanteModel.findOne({ 'id': id }))._id);
      const dadosAtualizados = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome ,
        dataNascimento: req.body.dataNascimento,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        //ImagemPerfil: req.body.ImagemPerfil
      };
      await assinanteModel.findByIdAndUpdate(_id, dadosAtualizados);
      res.status(200).send();
    }


        async deletarUsuario(req, res) {
            const id = req.params.id;
            const _id = String((await assinanteModel.findOne({ 'id': id }))._id);
            await assinanteModel.findByIdAndRemove(String(_id));
            res.status(200).send({ message: 'assinante deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar assinante' });
        };               
}

module.exports = new AssinanteController();

