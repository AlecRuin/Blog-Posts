const router=require("express").Router()

const DirRoutes= require("./DirRoutes")

router.use("/",DirRoutes)
module.exports = router