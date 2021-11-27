'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Artists', [
			{
				name: 'Ana Pereira',
				age: 15,
				email: 'ana@teste.com',
				password: 'estudante',
        address: 'Rua joao 123',
        city: 'Sao Paulo',
        country: 'Brazil',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Lucas Pereira',
				age: 17,
				email: 'lucas@teste.com',
				password: 'estudante',
        address: 'Rua guanabara 123',
        city: 'Sao Paulo',
        country: 'Brazil',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Felipe Santos',
				age: 18,
				email: 'felipe@teste.com',
				password: '12345',
        address: 'Rua pedro ivo 123',
        city: 'Sao Paulo',
        country: 'Brazil',
				createdAt: new Date(),
				updatedAt: new Date()
			},

	], {})
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {})
  }
};
