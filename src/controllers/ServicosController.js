const database = require('../models');

class ServicosController {
    static async pegaTodosOsServicos(req, res) {
        try {
            const servicos = await database.Servicos.findAll()
            return res.status(200).json(servicos)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async pegaUmServico(req, res) {
        const {
            id
        } = req.params
        try {
            const umServico = await database.Servicos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umServico)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async novoServico(req, res) {
        const novoServico = req.body
        try {
            const novoTrabalho = await database.Servicos.create(novoServico)
            return res.status(200).json(novoTrabalho)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async atualizarServico(req, res) {
        const {
            id
        } = req.params
        const atualizacao = req.body
        try {
            await database.Servicos.update(atualizacao, {
                where: {
                    id: Number(id)
                }
            })

            const atualizacaoFeita = await database.Servicos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(atualizacaoFeita)
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async deleteServico(req,res){
        const {id} = req.params
        try{
            await database.Servicos.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem:`id ${id} foi deletado`})
        }catch{
            return res.status(500).json(erro.message)
        }
    }

}






module.exports = ServicosController