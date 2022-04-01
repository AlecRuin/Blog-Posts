const {user}=require("../models")

const userdata=[
    {
        username: "MrAdmin",
        password:"Password123"
    },
    {
        username: "TrollerMan",
        password:"rudedude"
    }
]
const seedUsers = () => user.bulkCreate(userdata)
module.exports=seedUsers