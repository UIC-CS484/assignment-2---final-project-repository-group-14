var express = require('express')
var router = express.Router();



router.get('/',function(req,res,next){
    let user = req.user;
    //console.log(user)
    res.render('../views/dashboard',{user})
})

router.post('/',(req,res,next) =>{
    console.log(req.body.fname);
    console.log(req.body.lname)

})
module.exports = router