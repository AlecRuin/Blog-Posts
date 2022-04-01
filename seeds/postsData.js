const {posts}=require("../models")

const postdata=[
    {
        message: "i really hate mondays"
    }
]
const seedPosts = () => posts.bulkCreate(postdata)
module.exports=seedPosts