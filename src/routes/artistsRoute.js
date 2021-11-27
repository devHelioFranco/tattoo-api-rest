const { Router } = require('express');
const ArtistsController = require('../controllers/ArtistsController')


const router = Router()
router.get('/artists', ArtistsController.getAllTatooArtists)

module.exports = router