const {posts}=require("../models")

const postdata=[
    {
        message: "i really hate mondays",
        user_id:1
    },
    {
        message:"logan was here",
        user_id:1
    }
]
const seedPosts = () => posts.bulkCreate(postdata)
module.exports=seedPosts