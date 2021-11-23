const database = require('../models.user.js');

class UsersController{
    static async index(req, res){
        try{
            const indexUsers = await database.User.findAll()
            return res.status(200).json(indexUsers)
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }
}

module.exports = UsersController;