
const {Router} = require('express');

const TatooArtistsController = require('../controllers/TatooArtistsController');

const router = Router();

router.get('/tatoo-artists', TatooArtistsController.getAllTatooArtists());


router.post('/tatoo-artists', TatooArtistsController.saveTatooArtists());


module.exports = router;