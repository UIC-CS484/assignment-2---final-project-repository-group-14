const express = require('express')
const { user } = require('osenv')
const { Database } = require('sqlite3')
var router = express.Router()
const database = require('../database/testdb')
const validate = require('../config/validate')




router.get('/',function(req,res,next){
    res.render("../views/create_account.hbs")
})

router.post('/',async function(req,res,next){

  var password = req.body.password

  if (!validate.validatePassword(password)) {
    console.log("not a good password, try again")
    return res.redirect('./');
  }
  
  let v = await database.getEmail(req.body.email)
  if(v == undefined){
    await database.insertUser(req.body);
    res.redirect('./')
  }
  else{
    console.log("I exist")

  }
  
   
})

module.exports = router;

