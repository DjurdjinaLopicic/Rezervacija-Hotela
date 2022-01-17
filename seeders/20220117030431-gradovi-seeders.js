'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Gradovis', [
      {
        naziv: 'Beograd'
      },
      {
        naziv: 'Novi Sad'
      },
      {
        naziv: 'Nis'
      },
      {
        naziv: 'Kragujevac'
      },
      {
        naziv: 'Zrenjanin'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Gradovis', null, {});
  }
};
