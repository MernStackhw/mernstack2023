const express = require("express");

const userRouter = express.Router({})

userRouter.get("/userRoute",function(req,res){
    res.send("<h1>Welcome to my First Express User Mounted file</h1>")
})

module.exports = userRouter;