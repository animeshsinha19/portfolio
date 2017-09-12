var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var ipaddress = 'localhost';
var port = 5000;


app.listen(port, ipaddress);