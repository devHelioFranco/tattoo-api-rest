const { Router } = require('express');
const ServicosController = require ('../controllers/ServicosController')

const router = Router()

router.get("/Servicos", ServicosController.pegaTodosOsServicos)
router.get("/Servicos/:id", ServicosController.pegaUmServico)
router.post("/Servicos", ServicosController.novoServico)
router.put("/Servicos/:id", ServicosController.atualizarServico)




module.exports = router