const LocalStrategy = require('passport-local').Strategy;
let users = require('./users.json');



module.exports =function(passport){
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(username,password,done){
        for(var index = 0; index < users.length; ++index){
            var user = users[index];
            if(user.email == username && user.password == password){
                done(null,user);
            }
            else{
                done(null,false);
            }
        }
    }));


passport.serializeUser(function(user,done){
    console.log(user)
    return done(null,user);
});

passport.deserializeUser((user,done) =>{
    return done(null,user);
});

}
