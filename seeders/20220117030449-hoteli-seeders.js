'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hotelis', [
      {
        naziv: 'Zlatni rog',
        opis: 'U centru grada',
        gradId: 1
      },
      {
        naziv: 'Vodenica',
        opis: 'Okruzen prirodom',
        gradId: 1
      },
      {
        naziv: 'Zvezda',
        opis: 'U centru grada',
        gradId: 3
      },
      {
        naziv: 'Maja',
        opis: 'Sadrzi bazen, teretanu i igraliste za decu',
        gradId: 3
      },
      {
        naziv: 'Cvet',
        opis: 'Mirna lokacija',
        gradId: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Hotelis', null, {});
  }
};
