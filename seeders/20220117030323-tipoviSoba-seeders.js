'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoviSobas', [
      {
        tip: 'jednokrevetna'
      },
      {
        tip: 'dvokrevetna'
      },
      {
        tip: 'trokrevetna'
      },
      {
        tip: 'cetvorokrevetna'
      },
      {
        tip: 'petokrevetna'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TopoviSobas', null, {});
  }
};
