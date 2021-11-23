const database = require('../models');

class UsersController{
    static async index(req, res){
        try{
            const indexUsers = await database.User.findAll()
            return res.status(200).json(indexUsers)
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }

    static async show(req, res){
        const  {id} = req.params
        try{
            const idUser = await database.User.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(idUser)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async save(req, res){
        const newUser = req.body
        try{
            const createUser = await database.User.create(newUser)
            return res.status(200).json(createUser)


        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async update(req, res){
        const {id} = req.params
        const newInfo = req.body
        try{
            await database.User.update(newInfo, { 
                where: {
                id: Number(id)
            }     
            })
            const updateUser = await database.User.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(updateUser)
            
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController;