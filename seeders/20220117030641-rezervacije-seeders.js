'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rezervacijes', [
      {
        korisnikId: 3,
        sobaId: 2,
        datumPocetka: "2022-4-4",
        datumKraja: "2022-4-7"
      },
      {
        korisnikId: 1,
        sobaId: 1,
        datumPocetka: "2022-10-10",
        datumKraja: "2022-10-11"
      },
      {
        korisnikId: 5,
        sobaId: 1,
        datumPocetka: "2022-5-5",
        datumKraja: "2022-5-7"
      },
      {
        korisnikId: 4,
        sobaId: 2,
        datumPocetka: "2022-5-10",
        datumKraja: "2022-6-10"
      },
      {
        korisnikId: 3,
        sobaId: 4,
        datumPocetka: "2022-10-10",
        datumKraja: "2022-10-15"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rezervacijes', null, {});
  }
};
