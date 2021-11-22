const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'grupo8',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;