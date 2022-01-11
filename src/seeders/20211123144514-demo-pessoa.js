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
        email: 'jose@gmail.com',
        senha: 'jose1234',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {			
				nome: 'Pedro Santos',
				idade: 22,
        endereco: 'Rua Joao Fagundes 345',
        cidade: 'Sao Paulo',
        cep: 85790124,
        email: 'pedro@gmail.com',
        senha: 'pedro1234',
				createdAt: new Date(),
				updatedAt: new Date()
			}

  ], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    
   
    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
