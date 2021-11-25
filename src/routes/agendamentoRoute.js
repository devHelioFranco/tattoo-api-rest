const { Router } = require('express');
const agendamentoController = require('../controllers/AgendaController')

const router = Router();

router.get('/agendamento',agendamentoController.index)


module.exports = router;