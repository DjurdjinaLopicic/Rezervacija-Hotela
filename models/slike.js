'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Hoteli, Sobe}) {
      this.belongsTo(Hoteli, {foreignKey: 'hotelId', as: 'hotel'});
      this.belongsTo(Sobe, {foreignKey: 'sobaId', as: 'soba'});
    }
  };
  Slike.init({
    url: DataTypes.STRING(4000)
  }, {
    sequelize,
    modelName: 'Slike',
  });
  return Slike;
};