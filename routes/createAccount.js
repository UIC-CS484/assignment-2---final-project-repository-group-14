const express = require('express')
const router = express.Router()
var fs = require('fs');

// Takes in the fields and uses their data to store into a json array and then written to a json file

router.post('/',(req, res)=>{
    var firstName = req.body.fname
    var lastName = req.body.lname
    var email = req.body.email
    var password = req.body.password

    console.log("first_name: " + firstName + " last_name: " + lastName + " Email: " + email + " Password: " + password);

    let users = [{
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }];

    let data = JSON.stringify(users)
    fs.writeFileSync('users.json', data)

    res.render('confirmation', { first_name : firstName, last_name: lastName});

})

module.exports = router