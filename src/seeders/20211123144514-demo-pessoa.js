'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Users', [
      {			
				nome: 'Felipe Santos',
				idade: 18,
        endereco: 'Rua pedro ivo 123',
        cidade: 'Sao Paulo',
        cep: 85780000,
				createdAt: new Date(),
				updatedAt: new Date()
			}
  ], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    
   
    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
