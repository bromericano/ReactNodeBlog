const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const user = require('./user');

const app = express();
app.use(express.static(path.join(__dirname,"/html")));
app.use(bodyParser.json());

app.post('/signin', function (req, res) {
    const user_name = req.body.email;
    const password= req.body.password;
    user.validateSignIn(user_name, password, function(result) {
        if(result) {
            res.send('Success')
        } else {
            res.send('Wrong username/password')
        }
    });
});

app.post('/signup', function (req, res) {
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    if(name && email && password) {
        user.signup(name, email, password)
    } else {
        res.send('Failure');
    }
})

app.listen(7777, function() {
    console.log("Started listening on port", 7777);
});