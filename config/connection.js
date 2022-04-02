//require sequelize and dotenv to log into MySQL2
const Sequelize = require("sequelize")
require('dotenv').config()
//create sequelize obj and grab values from environment folder and pass them through. 
const sequelize = new Sequelize(
    "wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "uzhtdcblxi2op95r",
    "iy51m0s1tctfmhgm",
)
//finally, export the sequelize obj made. this will be used by the models created.
module.exports=sequelize