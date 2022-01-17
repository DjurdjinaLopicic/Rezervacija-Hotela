'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Rezervacijes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      datumPocetka: {
        type: DataTypes.DATE,
        allowNull: false
      },
      datumKraja: {
        type: DataTypes.DATE,
        allowNull: false
      },
      sobaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      korisnikId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Rezervacijes');
  }
};