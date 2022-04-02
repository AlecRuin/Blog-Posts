//require sequelize and dotenv to log into MySQL2
const Sequelize = require("sequelize")
require('dotenv').config()
//create sequelize obj and grab values from environment folder and pass them through. 
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}
//finally, export the sequelize obj made. this will be used by the models created.
module.exports=sequelize