'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      User.hasMany(models.Agendamento, {
        foreignKey: 'user_id'
      })
    }
  };
  User.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};