const router=require("express").Router()
//route users when they add in the magic word to the end of the url
const userRoutes= require("./user-routes")
const postsRoutes=require("./posts-routes")
const replyRoutes= require("./replies-routes")
router.use("/users",userRoutes)
router.use("/reply",replyRoutes)
router.use("/posts",postsRoutes)
module.exports = router