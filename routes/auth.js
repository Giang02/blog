const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async(req,res)=>{
    //Create a new User    
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        });
        //Save to database
        try{
            const savedUser= await newUser.save();
            res.status(201).json(savedUser);
        }catch(err){
         res.status(500).json(err);
        }
});
//Login
router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong credentials!");/* Gui loi khi sai username*/
    
        const validated = await User.findOne({password:req.body.password})
        !validated && res.status(401).json("Wrong credentials!");/*Gui loi khi sai mk */ 
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
        {expiresIn: "3d"}
        );
        const {password, ...others} = user._doc;
        res.status(200).json({...others});
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;