const {Model,DataTypes}=require("sequelize")
const sequelize=require("../config/connection")
class posts extends Model{}
//creates a posts model for MySQL2 to use
posts.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        message:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:"user",
                key:"id"
            }
        }
    },
    {
        sequelize,
        freezeTableName:true,
        modelName:"posts"
    }
)
module.exports=posts