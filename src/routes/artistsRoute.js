const { Router } = require('express');
const ArtistsController = require('../controllers/ArtistsController')


const router = Router()
router.get('/artists', ArtistsController.getAllTatooArtists);
router.get('/artists/:id', ArtistsController.getOne);
router.post('/artists', ArtistsController.saveArtist);
router.put('/artists/:id', ArtistsController.updateArtist);
router.delete('/artists/:id', ArtistsController.deleteArtist)

module.exports = router