const Sequelize = require('sequelize');
const database = require('../infra/db');

const User = database.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: tru
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = User;