var express = require('express');
var server = express();

server.use(express.static(__dirname + '/frontend'));
server.listen(process.env.PORT || 3000);