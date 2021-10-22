const express = require('express')
const { user } = require('osenv')
const { Database } = require('sqlite3')
var router = express.Router()
const database = require('../database/testdb')




router.get('/',function(req,res,next){
    res.render("../views/create_account.hbs")
})

router.post('/',async function(req,res,next){
  //check 
  
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

