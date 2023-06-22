const {DataTypes}= require("sequelize");

//El modelo le dice a Sequelize varias cosas sobre la 
//entidad que representa, como el nombre de la tabla
// en la base de datos y qué columnas tiene (y sus tipos de datos).

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull:false
    },
    duration: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
        allowNull:false
    }
    });
  }; 