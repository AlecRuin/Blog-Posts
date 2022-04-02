const posts=require('./posts')
const replies= require("./replies")
const user=require('./user')
//creates a user model for MySQL2 to use
user.hasMany(posts,{
    foreignKey:"user_id"
})
posts.belongsTo(user,{
    foreignKey:"user_id"
})
posts.hasMany(replies,{
    foreignKey:"post_id"
})
replies.belongsTo(posts,{
    foreignKey:"post_id"
})
replies.belongsTo(user,{
    foreignKey:"user_id"
})
user.hasMany(replies,{
    foreignKey:"user_id"
})
module.exports={posts,replies,user}