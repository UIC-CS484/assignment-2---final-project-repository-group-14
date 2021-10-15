const express = require('express')
const passport = require('passport');
var router = express.Router();

const app = express()
const port = 3000

// This is the "main" folder

app.use(express.json())
app.use(express.urlencoded())

//passport config
require('./passport')(passport);




// Sets the views folder so file names can be directly called
app.set('views', './views');
app.set('view engine', 'hbs');



// Creates a file path to the createAccount.js
const createAccounts = require('./routes/createAccount')
const logInAccounts = require('./routes/logIn')

// createAccount.js will be used on homepage
app.use('/', createAccounts)
app.use('/logIn', logInAccounts)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})