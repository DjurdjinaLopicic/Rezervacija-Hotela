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
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Sobes',
          key: 'id',
          as: 'sobaId'
        }
      },
      korisnikId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Korisnicis',
          key: 'id',
          as: 'korisnikId',
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Rezervacijes');
  }
};