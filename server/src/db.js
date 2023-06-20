require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

//con esto protegemos nuestros datos sensibles
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

//con esto realizamos la conexion con la DB
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, //para que no aparezca un monton de info en consola
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//con esto inyectamos sequelize a los modelos
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//Realizamos destructuring de los modelos para poder relacionarlos
const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Relacion de muchos a mucho
//un Pais va a tener muchas actividades
//y una Actividad va a estar en muchos Paises
Country.belongsToMany(Activity,{through:"CountryActi"});
Activity.belongsToMany(Country,{through:"CountryActi"});

//exportamos nuestra conexion de sequelize para poder solicitarlo en index
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};