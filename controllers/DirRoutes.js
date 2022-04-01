const router = require('express').Router()
const {posts,replies,user}=require("../models")
//router.use redirects to another folder for routing purposes
//router.get redirects the client once they reached the final destination of the routes
router.get("/",async(req,res)=>{
    try{
        const dbPostData= await posts.findAll({
            include:[
                {
                    model:replies,
                    attributes:["message"]
                }
            ]
        });
        const postsMap = dbPostData.map((postsData)=>
            postsData.get({plain:true})
        );
        res.render('landingpage',{
            loggedIn: req.session.loggedIn,
        })
    }catch(err){
        err ? res.status(500).json(err) : console.log("welcome home")
    }
})

router.get('/login',(req,res)=>{
    if (req.session.loggedIn){
        res.redirect("/")
    }
    res.render("login")
})
module.exports=router