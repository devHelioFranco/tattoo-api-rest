'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
   
    await queryInterface.bulkDelete('users', null, {});
  
  }
};
