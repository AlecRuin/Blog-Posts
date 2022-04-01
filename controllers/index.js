const router=require("express").Router()

const DirRoutes= require("./DirRoutes")
const apiRoutes = require("./api")
router.use("/",DirRoutes)
router.use("/api",apiRoutes)
module.exports = router