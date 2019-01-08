'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dida = sequelize.define('Dida', {
    title: DataTypes.STRING
  }, {});
  Dida.associate = function(models) {
    // associations can be defined here
  };
  return Dida;
};