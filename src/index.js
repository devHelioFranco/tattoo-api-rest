const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log(req.headers.host, new Date().toLocaleTimeString());
    next();
  });
  
  app.use(express.json());


const porta = 3000;

app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem : 'rota de teste'
    }))

app.listen(porta, () => console.log(`servidor está rodando na porta ${porta}`))

module.exports = app;