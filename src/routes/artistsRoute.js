const { Router } = require('express');
const ArtistsController = require('../controllers/ArtistsController')


const router = Router()
router.get('/artists', ArtistsController.getAllTatooArtists);
router.get('/artists/:id', ArtistsController.getOne);
// router.post('/tatoo-artists', ArtistsController.saveTatooArtists());

module.exports = router