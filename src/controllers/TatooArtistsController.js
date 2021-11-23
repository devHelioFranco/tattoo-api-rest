
const database = require('../models');

class TatooArtistsController{
    static async getAllTatooArtists(req, res){

        try{
            const allTatooArtists = await database.tatoo_artists.findAll()
            return res.status(200).json(allTatooArtists)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = TatooArtistsController;