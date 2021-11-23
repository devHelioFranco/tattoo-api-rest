const { Router } = require('express');
const UsersController = require('../controllers/UsersController')

const router = Router()

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)

module.exports = router