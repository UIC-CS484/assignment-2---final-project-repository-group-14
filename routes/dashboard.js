var express = require('express')
var router = express.Router();
const database = require('../database/testdb')
const passport = require('passport');
var userId
const axios = require('axios');


router.get('/',function(req,res,next){
    let user = req.user;
    axios.get("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3/roster").then(function(response){
        //"https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams"
        //https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams
        //console.log(response.data.athletes[0]);
        var object = response.data.athletes;
        var players = object[0].items;
        console.log(object.length)
        var counter = 0;
        for(i = 0; i < object.length;i++){
            for(j=0; j < object[i].items.length;j++){
                console.log(object[i].items[j].displayName + " : " + object[i].items[j].position.displayName)
                counter++;
            }
        }
  
        // works console.log(object[0].items[1].displayName);
        // works console.log(object[0].items.length);

        // var key = 'displayName'
        // for(key in object){
        //     if(object.hasOwnProperty(key)){
        //         console.log(object[key])
        //     }
        // }
    }).catch(function(error){
        console.log(error);
    })
    //console.log(user)
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