'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sobes', [
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon',
        cena: 1000,
        hotelId: 1,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon',
        cena: 5000,
        hotelId: 1,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi mikrotalasnu, frizider',
        cena: 2000,
        hotelId: 2,
        tipSobeId: 2
      },
      {
        opis: 'Sadrzi reso, fen za kosu, frizider',
        cena: 4000,
        hotelId: 5,
        tipSobeId: 4
      },
      {
        opis: 'Sadrzi TV, dobru internet konekciju, telefon, frizider',
        cena: 4500,
        hotelId: 1,
        tipSobeId: 3
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sobes', null, {});
  }
};
