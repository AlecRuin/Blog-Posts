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
                    attributes:["message","createdAt","id"],
                    include:[{
                        model:user,
                        attributes:["username","id"]
                    }] 
                },
                {
                    model:user,
                    attributes:["username"]
                }
            ]
        });
        //simplify data recieved.
        const postsMap = dbPostData.map((postsData)=>
            postsData.get({plain:true})
        );
        //insert User_ID to every crevice of the data so handlebars can use it
        if (req.session.User_Id) {
            for (let key in postsMap) {
                postsMap[key]["user_loggedIn"]=req.session.User_Id
                for(let key2 in postsMap[key]["replies"]){
                    postsMap[key]["replies"][key2]["user_loggedIn"]=req.session.User_Id
                    console.log(postsMap[key]["replies"][key2]);
                }
            }
        }
        //render the handlebars
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