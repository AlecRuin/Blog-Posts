//require sequelize and dotenv to log into MySQL2
const Sequelize = require("sequelize")
require('dotenv').config()
//create sequelize obj and grab values from environment folder and pass them through. 
const sequelize = new Sequelize(
    mr6azgrl8keuxivt,
    uzhtdcblxi2op95r,
    iy51m0s1tctfmhgm,
    {
        host:"localhost",
        dialect:"mysql",
        port:3306
    }
)
//finally, export the sequelize obj made. this will be used by the models created.
module.exports=sequelize