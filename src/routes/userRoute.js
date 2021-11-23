const { Router } = require('express');
const UsersController = require('../controllers/UsersController')

const router = Router()

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.save)
router.put('/users/:id', UsersController.update)

module.exports = router