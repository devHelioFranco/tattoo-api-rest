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
        references:{ model: 'Users', key:'id' }
      },
      tatuador_id: {
        type: Sequelize.INTEGER,
        references:{ model: 'Artists', key:'id' }
      },
      servico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model: 'Servicos', key:'id' }
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