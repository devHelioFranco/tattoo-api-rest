const { Router } = require('express');
const ServicosController = require ('../controllers/ServicosController')

const router = Router()

router.get("/Servicos", ServicosController.pegaTodosOsServicos)
router.get("/Servicos/:id", ServicosController.pegaUmServico)
router.post("/Servicos", ServicosController.novoServico)
router.put("/Servicos/:id", ServicosController.atualizarServico)
router.delete("/Servicos/:id", ServicosController.deleteServico)

module.exports = router