const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var bcrypt = require('bcrypt')

const loginRouter = require('./routes/login');
const createAccountRouter = require('./routes/create_account');
const passport = require('passport');
const database = require('./database/testdb.js');
const databasefile = require('./database/testdb');
const { InsufficientStorage } = require('http-errors');


// Used to parse our forms 
// placed before our middle ware 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup our middle
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/',loginRouter);
app.use('/create_account',createAccountRouter);



//port
app.listen(5000)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  

module.exports = app