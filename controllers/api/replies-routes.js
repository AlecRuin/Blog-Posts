const withAuth = require("../../utils/auth")
const router = require("express").Router()
const replies= require("../../models/replies")
//create a new reply
router.post("/",withAuth,async(req,res)=>{
    try{
        console.log(req.body.formProps["blog-content"])
        replies.create(
            {
                message:req.body.formProps["blog-content"],
                post_id:req.body.formProps["id"],
                user_id:req.session.User_Id
            }
        )
        res.status(200).json()
    }catch(err){
        res.json(err)
    }
})
//delete reply with given id
router.delete("/",async (req,res)=>{
    try{
        replies.destroy({
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

module.exports=router