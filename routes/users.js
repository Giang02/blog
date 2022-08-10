const router = require("express").Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");
const bcrypt = require("bcrypt");//Encryption password
const {verifyTokenAndAdmin ,verifyTokenAndAuthorization, verifyToken} = require("./verifyToken");

//Update
router.put("/:id", async(req,res) => {
    try {
       const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
       {new:true}
       );
       res.status(200).json(updatedUser);
    }catch (err){
         res.status(500).json(err);
    }
});
//Delete
router.delete("/:id", async(req,res) => {
      try{
            const user = await User.findById(req.params.id);
        try {
            await Post.deleteMany({username:user.username});
         await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User has been deleted...");
    }catch (err){
         res.status(500).json(err);
      }
    }catch(err){
        res.status(404).json("User not found!");
    }
}
);
//Get user
router.get("/find/:id", verifyTokenAndAdmin, async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc
        res.status(200).json(others);   
    }catch (err){
        res.status(500).json(err);
    }    
});
//Get all users
router.get("/", async(req, res) => {
    const query = req.query.new;
    try{
        const users = query
        ?await User.find().sort({_id: -1}).limit(1)
        : await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;