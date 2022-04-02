const {replies}=require("../models")

const replydata=[
    {
        message: "Well, I LOVE mondays",
        post_id:1,
        user_id:1
    }
]
const seedReplies = () => replies.bulkCreate(replydata)
module.exports=seedReplies