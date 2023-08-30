const express = require("express")

const router = express.Router({})//({//caseSensitive: true})

router.get('/router',(req,res)=>{

    res.send('<h1>Express Router helps removing the burden of route table from main applications </h1>')
})
router.get('/Hello',(req,res)=>{

    res.send('<h1> Hello from admin </h1>')
})

module.exports = router;