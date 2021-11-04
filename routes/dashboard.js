var express = require('express')
var router = express.Router();
const database = require('../database/testdb')
const passport = require('passport');
var userId


router.get('/',function(req,res,next){
    let user = req.user;
    console.log(user)
    // console.log(user.id)
    userId = user.id
    res.render('../views/dashboard',{user})
})

router.post('/',async function(req,res,next){
    // console.log(req.body.fname);
    // console.log(req.body.lname)
    // console.log(userId)

    await database.update(req.body, userId);
    //await database.deleteUser(userId);
    
    res.redirect('./')
})



module.exports = router