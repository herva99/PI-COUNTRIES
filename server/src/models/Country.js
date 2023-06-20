//El modelo le dice a Sequelize varias cosas sobre la 
//entidad que representa, como el nombre de la tabla
// en la base de datos y qué columnas tiene (y sus tipos de datos).

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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