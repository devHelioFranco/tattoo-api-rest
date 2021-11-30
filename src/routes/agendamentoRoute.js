const { Router } = require('express');
const agendamentoController = require('../controllers/AgendaController')

const router = Router();

router.get('/agendamento',agendamentoController.index) 
router.get('/agendamento/:id', agendamentoController.show)
router.post('/agendamento', agendamentoController.save)
router.put('/agendamento/:id', agendamentoController.update)
router.delete('/agendamento/:id', agendamentoController.remove)

module.exports = router;