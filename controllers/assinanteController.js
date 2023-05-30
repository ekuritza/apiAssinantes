const assinanteModel = require('../models/assinanteModel');
const multer = require('multer');
const upload = multer();


class AssinanteController {

  async criarAssinante(req, res) {
    try {
      upload.single('imagem')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json({ error: 'Erro ao fazer o upload da imagem' });
        } else if (err) {
          return res.status(500).json({ error: 'Erro ao criar assinante' });
        }
  
        const imagem = req.file.buffer; 
  
        const novoAssinante = new assinanteModel(req.body);
        novoAssinante.imagem = imagem; 
  
        await novoAssinante.save();
        res.status(201).json(novoAssinante);
      });
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

    async buscarAssinantePorNome(req, res) {
      const nome = req.params.nome;
      try {
        const assinante = await assinanteModel.findOne({ nome: nome });
        if (assinante) {
          res.status(200).json(assinante);
        } else {
          res.status(404).json({ erro: 'Assinante não encontrado!' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinante' });
      }
    }
    
    async  buscarAssinantePorSobrenome(req, res) {
      const sobrenome = req.params.sobrenome;
      try {
        const assinante = await assinanteModel.findOne({ sobrenome: sobrenome });
        if (assinante) {
          res.status(200).json(assinante);
        } else {
          res.status(404).json({ erro: 'Assinante não encontrado!' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinante' });
      }
    }
    
    async  buscarAssinantePorCidade(req, res) {
      const cidade = req.params.cidade;
      try {
        const assinante = await assinanteModel.findOne({ cidade: cidade });
        if (assinante) {
          res.status(200).json(assinante);
        } else {
          res.status(404).json({ erro: 'Assinante não encontrado!' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinante' });
      }
    }
    
    async buscarAssinantePorEstado(req, res) {
      const estado = req.params.estado;
      try {
        const assinante = await assinanteModel.findOne({ estado: estado });
        if (assinante) {
          res.status(200).json(assinante);
        } else {
          res.status(404).json({ erro: 'Assinante não encontrado!' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinante' });
      }
    }
    
    async buscarAssinantePorStatus(req, res) {
      const status = req.params.status;
      try {
        const assinante = await assinanteModel.findOne({ status: status });
        if (assinante) {
          res.status(200).json(assinante);
        } else {
          res.status(404).json({ erro: 'Assinante não encontrado!' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar assinante' });
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
        status: req.body.status,
        imagem: req.body.imagem
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

