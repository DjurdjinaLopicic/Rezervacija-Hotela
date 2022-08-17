'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hoteli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Gradovi, Sobe, Komentari, Slike}) {
      // define association here
      this.belongsTo(Gradovi, {foreignKey: 'gradId', as: 'grad'});
      this.hasMany(Sobe, {foreignKey: 'hotelId', as: "sobe", onDelete:'cascade', hooks:true} )
      this.hasMany(Komentari, {  foreignKey: 'hotelId', as: 'poruka', onDelete:'cascade', hooks: true} );
      this.hasMany(Slike, {  foreignKey: 'hotelId', as: 'slika', onDelete:'cascade', hooks: true} );
    }
  };
  Hoteli.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opis: DataTypes.STRING(4000)
  }, {
    sequelize,
    modelName: 'Hoteli',
  });
  return Hoteli;
};