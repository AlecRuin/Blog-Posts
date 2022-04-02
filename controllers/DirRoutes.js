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
                    attributes:["message"],
                    include:[{
                        model:user,
                        attributes:["username"]
                    }] 
                },
                {
                    model:user,
                    attributes:["username"]
                }
            ]
        });
        const postsMap = dbPostData.map((postsData)=>
            postsData.get({plain:true})
        );
        console.log("postMap:");
        console.log(postsMap);
        res.render('landingpage',{
            postsMap,
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