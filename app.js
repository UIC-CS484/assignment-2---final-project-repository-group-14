const express = require('express')
const app = express()
const path = require('path');
const loginRouter = require('./routes/login');
const createAccountRouter = require('./routes/create_account');
const passport = require('passport');
const session = require('express-session')
const dashboard = require('./routes/dashboard')
const flash = require('express-flash')



//passport config
require('./config/passport')(passport);

var session_config = {
  secret: 'secret', //a random unique string key used to authenticate a session
  resave: true, //nables the session to be stored back to the session store, even if the session was never modified during the request
  saveUninitialized: true, //his allows any uninitialized session to be sent to the store. When a session is created but not modified, it is referred to as uninitialized.
  cookie: { secure: true } //true is a recommended option. However, it requires an https-enabled website
  //store  parameter when saving session to database
};

session_config.cookie.secure = false;
//IMPORTANT REVIEW IN CLASS - https://expressjs.com/en/resources/middleware/session.html

//Express Sessions
app.use(session(session_config))
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//setup our middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/',loginRouter);
app.use('/create_account',createAccountRouter);
app.use('/dashboard',dashboard)



module.exports = app