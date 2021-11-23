const { Router } = require('express');
const UsersController = require('../controllers/UsersController')

const router = Router()

router.get('/users', UsersController.index)

module.exports = router