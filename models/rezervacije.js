'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rezervacije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Korisnici, Sobe}) {
      // define association here
      this.belongsTo(Korisnici, {foreignKey: 'korisnikId', as: 'korisnik'})
      this.belongsTo(Sobe, {foreignKey: 'sobaId', as: 'soba'})
    }
  };
  Rezervacije.init({
    datumPocetka: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datumKraja: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Rezervacije',
  });
  return Rezervacije;
};