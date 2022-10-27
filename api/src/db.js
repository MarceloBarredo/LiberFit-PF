const { Sequelize } =require('sequelize')
const path =require('path')
const fs = require("fs")
require('dotenv').config();

 
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const sequelize =  new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gym`,
	{
	  logging: false, }
)
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Traemos los modelos:
const { 
  clients, 
  employees, 
  exercises, 
  gyms, 
  locacions, 
  machines, 
  owners, 
  products, 
  rols, 
  rutines, 
  subscriptions, 
  trainings } = sequelize.models;

// Declaramos las relaciones:



module.exports= {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

	 

