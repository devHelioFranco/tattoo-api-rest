'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      data: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{ model: 'user', key:'id' }
      },
      tatuador_id: {
        type: Sequelize.INTEGER,
        references:{ model: 'tatuadores', key:'id' }
      },
      servico_id: {
        type: Sequelize.INTEGER,
        references:{ model: 'servico', key:'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agendamentos');
  }
};