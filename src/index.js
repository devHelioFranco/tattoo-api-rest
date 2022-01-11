const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes')


const porta = 3001;
app.use(cors())
routes(app)

app.listen(porta, () => console.log(`servidor está rodando na porta ${porta}`))

module.exports = app;