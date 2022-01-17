'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rezervacijes', [
      {
        korisnikId: 3,
        sobaId: 2,
        datumPocetka: 10/10/2022,
        datumKraja: 11/11/2022
      },
      {
        korisnikId: 1,
        sobaId: 1,
        datumPocetka: 1/1/2023,
        datumKraja: 2/2/2023
      },
      {
        korisnikId: 5,
        sobaId: 1,
        datumPocetka: 10/10/2022,
        datumKraja: 11/11/2022
      },
      {
        korisnikId: 4,
        sobaId: 2,
        datumPocetka: 11/11/2022,
        datumKraja: 12/12/2022
      },
      {
        korisnikId: 3,
        sobaId: 4,
        datumPocetka: 6/6/2022,
        datumKraja: 7/7/2022
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rezervacijes', null, {});
  }
};
