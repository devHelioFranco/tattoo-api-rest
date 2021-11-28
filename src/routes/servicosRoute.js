const { Router } = require('express');
const ServicosController = require ('../controllers/ServicosController')

const router = Router()

router.get("/Servicos", ServicosController.pegaTodosOsServicos)