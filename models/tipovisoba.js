'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoviSoba extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Sobe}) {
      // define association here
      this.hasMany(Sobe, {foreignKey: 'tipSobeId', as: "sobe", onDelete:'cascade', hooks:true} )
    }
  };
  TipoviSoba.init({
    tip: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'TipoviSoba',
  });
  return TipoviSoba;
};