'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Slikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      url: {
        type: DataTypes.STRING(4000)
      },
      hotelId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Hotelis',
          key: 'id',
          as: 'hotelId',
        }
      },
      sobaId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Sobes',
          key: 'id',
          as: 'sobaId',
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
    await queryInterface.dropTable('Slikes');
  }
};