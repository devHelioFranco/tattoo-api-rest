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
}



module.exports = ServicosController