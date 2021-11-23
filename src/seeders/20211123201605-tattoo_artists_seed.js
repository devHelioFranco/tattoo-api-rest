'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

 return queryInterface.bulkInsert('tatoo_artists',[
  {
    name: "Joao Luiz",
    age: 20,
    email: "joao@gmail.com",
    password: "12345",
    address: "rua pororo, 123",
    city: "Londrina",
    country: "Brazil",
    createdAt: new Date(),
    updatedAt: new Date()


  },
  {
    name: "Pamela Costa",
    age: 17,
    email: "pamela@gmail.com",
    password: "12345",
    address: "rua jurur, 321",
    city: "Brasilia",
    country: "Brazil",
    createdAt: new Date(),
    updatedAt: new Date()


  }


 ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tatoo_artists', null, {})
  }
};
