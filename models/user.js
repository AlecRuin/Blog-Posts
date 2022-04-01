const {Model, DataTypes} = require("sequelize")
const bcrypt = require("bcrypt")
const sequelize = require("../config/connection")
//creates a function to be used when the client is being logged in. Check router.get("/login") for the reference
class user extends Model{
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw,this.password)
    }
}
user.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING(25),
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6],
            },
        },
    },
    {//call this before creating the user
        hooks:{
            async beforeCreate(newUserData){
                //encrypt their password, yo
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        //call sequelize to logg into MySQL2
        sequelize,
        //dont make annoying timestamps for the model automatically
        timestamps:false,
        //dont change my table name. i named it that for a reason. rude. you didnt even ask
        freezeTableName:true,
        //set table name to user
        modelName:"user",
    }
)
module.exports=user