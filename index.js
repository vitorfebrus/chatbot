var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log('Example app listening on port 3000!');
});