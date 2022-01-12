const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes')


const porta = 3001;
app.use(cors())
routes(app)

app.use('/users', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

app.listen(porta, () => console.log(`servidor está rodando na porta ${porta}`))

module.exports = app;