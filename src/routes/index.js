const users = require('./userRoute')
const artists = require('./artistsRoute')
const servicos = require('./servicosRoute')
const express = require('express')
const agendamento = require('./agendamentoRoute')
module.exports = app => {

    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
      });
    app.use(express.json())
    app.use(users, 
      artists, 
      servicos, agendamento)

}
 