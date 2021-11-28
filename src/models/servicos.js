'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Servicos.init({
    nome: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    orcamento: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};