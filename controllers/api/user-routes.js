const router=require("express").Router()
const {user}=require('../../models')
//create a new user and save it. then save the data to the session storage
router.post("/",async(req,res)=>{
    try{
        const dbUserData = await user.create({
            username: req.body.username,
            password:req.body.password
        });
        req.session.save(()=>{
            req.session.loggedIn=true;
            req.session.User_Id=dbUserData.dataValues.id
            res.status(200).json(dbUserData)
        })
    }catch(err){
        err ? res.status(500).json(err):console.log("successfully created user")
    }
})
//check database to ensure user and password is correct
router.post("/login",async(req,res)=>{
    try{
        const dbUserData = await user.findOne({
            where:{
                username:req.body.username
            }
        });
        if (!dbUserData){
            res.status(400).json({message:"incorrect username or password"})
            return;
        }
        const validpassword = await dbUserData.checkPassword(req.body.password)
        if (!validpassword){
            res.status(400).json({message:"incorrect username or password"})
        }
        req.session.save(()=>{
            req.session.loggedIn=true
            req.session.User_Id=dbUserData.dataValues.id
            res.status(200).json({user:dbUserData,message:"logged in"})
        })
    }catch(err){
        err ? res.status(500).json(err):console.log("successfully created user")
    }
})
//destroy current session
router.post("/logout", (req,res)=>{
    if (req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end()
        });
    }else{
        res.status(404).end()
    }
})

module.exports = router