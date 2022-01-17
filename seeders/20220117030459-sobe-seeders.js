'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sobes', [
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon',
        hotelId: 1,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon',
        hotelId: 1,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi mikrotalasnu, frizider',
        hotelId: 2,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi reso, fen za kosu, frizider',
        hotelId: 5,
        tipSobeId: 4
      },
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon, frizider',
        hotelId: 1,
        tipSobeId: 3
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sobes', null, {});
  }
};
