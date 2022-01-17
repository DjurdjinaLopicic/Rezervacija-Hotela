'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Korisnicis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 255]
        }
      },
      ime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prezime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { 
          isEmail: {  
            msg: "Nije email" 
          }
        }
      } ,
      tip: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min:0,
          max:2
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
    await queryInterface.dropTable('Korisnicis');
  }
};