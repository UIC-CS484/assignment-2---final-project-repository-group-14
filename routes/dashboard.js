var express = require('express')
var router = express.Router();



router.get('/',function(req,res,next){
    let user = req.user;
    console.log(user)
    res.render('../views/dashboard',{user})
})

module.exports = router