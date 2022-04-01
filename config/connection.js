//require sequelize and dotenv to log into MySQL2
const sequelize = require("sequelize")
require('dotenv').config()
//create sequelize obj and grab values from environment folder and pass them through. 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    package.env.DB_PASSWORD,
    {
        host:"localhost",
        dialect:"mysql",
        port:3001
    }
)
//finally, export the sequelize obj made. this will be used by the models created.
module.exports=sequelize