const {Model,DataTypes}=require("sequelize")
const sequelize=require("../config/connection")

class replies extends Model{}

replies.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        message:{
            type:DataTypes.STRING,
            allowNull:false
        },
        post_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:"posts",
                key:"id"
            },
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
        modelName:"replies"
    }
)
module.exports=replies