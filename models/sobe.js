'use strict';
const {
  Model
} = require('sequelize');
const tipovisoba = require('./tipovisoba');
module.exports = (sequelize, DataTypes) => {
  class Sobe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Hoteli, TipoviSoba, Rezervacije, Slike}) {
      // define association here
      this.belongsTo(Hoteli, {foreignKey: 'hotelId', as: 'hotel'});
      this.belongsTo(TipoviSoba, {foreignKey: 'tipSobeId', as: 'tipSobe'});
      this.hasMany(Rezervacije, {  foreignKey: 'sobaId', as: 'rezervacije', onDelete:'cascade', hooks: true} );
      this.hasMany(Slike, {  foreignKey: 'sobaId', as: 'slike', onDelete:'cascade', hooks: true} );
    }
  };
  Sobe.init({
    opis: DataTypes.STRING(4000),
    cena: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:0
      }
    },    
    broj: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:1
      }
    }
  }, {
    sequelize,
    modelName: 'Sobe',
  });
  return Sobe;
};