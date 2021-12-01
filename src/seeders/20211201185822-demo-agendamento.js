'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Agendamentos', [
      {			
				status: 1,
        servico_id:"1",
        user_id:"3",
        tatuador_id: "1",
				data: new Date(),
        createdAt: new Date(),
				updatedAt: new Date()
			}
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
