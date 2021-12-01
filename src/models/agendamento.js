'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Agendamento.belongsTo(models.user, {
        foreignKey: 'usuario_id'
      })
      Agendamento.belongsTo(models.Artists,{
        foreignKey: 'tatuador_id'
      })
      Agendamento.belongsTo(models.Servicos, {
        foreignKey: 'servicos_id'
      })
    }
  };
  Agendamento.init({
    status: DataTypes.BOOLEAN,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};