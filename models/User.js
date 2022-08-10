const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    profilePic:{
        type:String,
        default:"",
    },
    address:{
        type:String,
        required:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
 {timestamps:true});

 module.exports = mongoose.model("User", UserSchema);