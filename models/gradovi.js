'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gradovi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Hoteli}) {
      // define association here
      this.hasMany(Hoteli, {foreignKey: 'gradId', as: "hoteli", onDelete:'cascade', hooks:true} )
    }
  };
  Gradovi.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Gradovi',
  });
  return Gradovi;
};