const {DataTypes}= require("sequelize");

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
        allowNull:false,
        unique:true,
        validate: {
            len: {
              args: [3, 30],
              msg:"el nombre debe contener entre 3 y 30 caracteres"
            }
          },
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull:false
    },
    duration: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
        allowNull: true
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull:false
    }
    }, {timestamp: false});
  }; 