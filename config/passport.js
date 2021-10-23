const LocalStrategy = require('passport-local').Strategy;
const database = require('../database/testdb')
const bcrypt = require('bcrypt')

module.exports = function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },async function(username,password,done){
        console.log("Hello")
        let user = await database.getEmail(username)
        console.log(user)
        // if email is not found
        if(user == undefined){
            
           done(null,false,{message:'Email does not exist'})
            
        }
	
	else{
            //console.log("User Exists, Please Check for password")
            try{
                if(await bcrypt.compare(password,user.password)){
                    console.log('Correct Password')
                    return done(null,user)
                }
		else{
                    return done(null,false,console.log("Incorrect Password"))
                }
            }catch(e){
                done(e)
            }

        }
        
    }))
  
    passport.serializeUser((user,done)=>{
        done(null,user)
    })

    passport.deserializeUser(function (id,done){
   
        let user = database.getId(id)
      
        done(null,user)
        
    })
    

}
    
   
    
