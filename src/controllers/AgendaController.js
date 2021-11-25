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
}

module.exports = AgendaController;