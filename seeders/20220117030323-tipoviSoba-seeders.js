'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoviSobas', [
      {//1
        tip: 'jednokrevetna'
      },
      {//2
        tip: 'dvokrevetna'
      },
      {//3
        tip: 'trokrevetna'
      },
      {//4
        tip: 'cetvorokrevetna'
      },
      {//5
        tip: 'petokrevetna'
      },
      {//6
        tip: 'porodicna'
      },
      {//7
        tip: 'suite'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TopoviSobas', null, {});
  }
};
