const database = require('../models');

class UsersController{
    static async index(req, res){
        try{
            const indexUsers = await database.Users.findAll()
            return res.status(200).json(indexUsers)
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }

    static async show(req, res){
        const  {email} = req.params
        try{
            const emailUser = await database.Users.findOne({
                where: {
                    email:String(email)
                }
            })
            return res.status(200).json(emailUser)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async save(req, res){
        const newUser = req.body
        try{
            const createUser = await database.Users.create(newUser)
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
            const updateUser = await database.Users.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(updateUser)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async remove(req, res){
        const {id} = req.params
        try{
            await database.Users.destroy({
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

module.exports = UsersController;