const router=require("express").Router()
//routes user to correct folder
const DirRoutes= require("./dir-routes")
const apiRoutes = require("./api")
router.use("/",DirRoutes)
router.use("/api",apiRoutes)
module.exports = router