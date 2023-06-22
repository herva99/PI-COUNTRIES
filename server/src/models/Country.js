const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        len: [3, 3],
        msg:"el id debe contener 3 caracteres"
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgFlag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {timestamp: false});
};      