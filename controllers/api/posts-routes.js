const router = require("express").Router()
const withAuth = require("../../utils/auth");
const posts=require("../../models/posts")

router.post("/",withAuth, async (req,res)=>{
    try{
        console.log("Body:");
        console.log(req.body.blog_content);
        console.log("session: ");
        console.log(req.session.User_Id);
        posts.create(
            {
                message:req.body.blog_content,
                user_id:req.session.User_Id
            }
        )
        res.status(200).json()
    }catch(err){
        res.json(err)
    }
});
router.delete("/",async (req,res)=>{
    try{
        posts.destroy({
            where:{
                id:req.body.id
            }
        })
        console.log(req.body.id);
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router