const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,"/html")));

app.listen(7777, function() {
    console.log("Started listening on port", 7777);
});