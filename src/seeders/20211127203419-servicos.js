'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Servicos', [{
       nome: "matheus Moraes",
      status: 1,
      orcamento: 155.55,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Servicos', null, {}); 
  }
};
