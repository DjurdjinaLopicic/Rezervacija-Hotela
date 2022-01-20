'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Sobes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      opis: DataTypes.STRING(4000),
      cena: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min:0
        }
      },
      tipSobeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'TipoviSobas',
          key: 'id',
          as: 'tipSobeId',
        }
      },
      hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Hotelis',
          key: 'id',
          as: 'hotelId',
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
    await queryInterface.dropTable('Sobes');
  }
};