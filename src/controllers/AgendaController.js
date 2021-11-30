const database = require('../models');

class AgendaController{
    static async index(req, res){
        try{
            const indexAgendamento = await database.Agendamento.findAll()
            return res.status(200).json(indexAgendamento)
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }
    static async show(req, res){
        const  {id} = req.params
        try{
            const idAgenda = await database.Agendamento.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(idAgenda)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async save(req, res){
        const novoAgendamento = req.body
        try{
            const agendar = await database.Agendamento.create(novoAgendamento)
            return res.status(200).json(agendar)


        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async update(req, res){
        const {id} = req.params
        const newInfo = req.body
        try{
            await database.Agendamento.update(newInfo, { 
                where: {
                id: Number(id)
            }     
            })
            const attAgendamento = await database.Agendamento.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(attAgendamento)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async remove(req, res){
        const {id} = req.params
        try{
            await database.Agendamento.destroy({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}



module.exports = AgendaController;