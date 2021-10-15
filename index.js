const express = require('express')
const app = express()
const port = 3000

// This is the "main" folder

app.use(express.json())
app.use(express.urlencoded())

//24 and 5

// Sets the views folder so file names can be directly called
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('create')
})

// Creates a file path to the createAccount.js
const createAccounts = require('./routes/createAccount')
const logInAccounts = require('./routes/logIn')

// createAccount.js will be used on homepage
app.use('/', createAccounts)
app.use('/logIn', logInAccounts)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})