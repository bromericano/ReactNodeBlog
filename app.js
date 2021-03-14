const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,"/html")));
app.use(bodyParser.json());

app.post('/signin', function (req, res) {
    const user_name = req.body.email;
    const password= req.body.password;
    if(user_name=='admin' && password=='admin'){
        res.send('success');
    } else {
        res.send('failure');
    }
});

app.listen(7777, function() {
    console.log("Started listening on port", 7777);
});