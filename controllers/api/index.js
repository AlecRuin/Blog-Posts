const router=require("express").Router()

const userRoutes= require("./user-routes")
const postsRoutes=require("./posts-routes")
const replyRoutes= require("./replies-routes")
router.use("/users",userRoutes)
router.use("/reply",replyRoutes)
router.use("/posts",postsRoutes)
module.exports = router