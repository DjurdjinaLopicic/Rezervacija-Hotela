'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Komentari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Korisnici, Hoteli}) {
      this.belongsTo(Korisnici, {foreignKey: 'korisnikId', as: 'korisnik'})
      this.belongsTo(Hoteli, {foreignKey: 'hotelId', as: 'hotel'})
    }
  };
  Komentari.init({
    tekst: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Komentari',
  });
  return Komentari;
};