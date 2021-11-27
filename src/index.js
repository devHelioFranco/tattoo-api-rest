const express = require ("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())// vai avisar o express que vamos usar outras bibliotecas 

const port = 3000

app.get('/teste', (req,res) => res.
status(200)
.send({mensagem: "Boas-Vindas à minha Api "
}))

app.listen(port, () => console.log (`servidor esta rodando na porta ${port}`))

module.exports = app 