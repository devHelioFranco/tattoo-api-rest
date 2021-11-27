const database = require('../models')

class TatooArtistsController{
    static async getAllTatooArtists(req, res){

        try{
            const allTatooArtists = await database.Artists.findAll()
            return res.status(200).json(allTatooArtists)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async getOne(req, res){
        const { id } = req.params
        try{
            const oneArtist = await database.Artists.findOne( { where: { id: Number(id)
            }
        })
        return res.status(200).json(oneArtist)
    }catch(error){

        }
    }
    static async saveArtist(req, res){
        const newArtist = req.body

        try{
            const savedArtist = await database.Artists.create(newArtist)
            return res.status(200).json(savedArtist)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async updateArtist(req, res){
        const {id} = req.params
        const newInfos = req.body

        try{
            await database.Artists.update(newInfos, {where: {id: Number(id)}})

            const updatedArtist = await database.Artists.findOne( {where: {id: Number(id)}})
            return res.status(200).json(updatedArtist)

        }catch(error){
            res.status(500).json(error.message)
        }
    }
    static async deleteArtist(req, res){
        const {id} = req.params

        try{
             await database.Artists.destroy({ where: {id: Number(id)}
        })
        return res.status(200).json({mensagem: `id ${id} deleted`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = TatooArtistsController;