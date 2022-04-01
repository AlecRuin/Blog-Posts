const router = require('express').Router()
//router.use redirects to another folder for routing purposes
//router.get redirects the client once they reached the final destination of the routes
router.get("/",(req,res)=>{
    res.render('landingpage',{
        loggedIn: req.session.loggedIn,
    })
})
module.exports=router