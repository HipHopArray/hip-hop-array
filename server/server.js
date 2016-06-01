var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./config/request-handlers.js');
var deleteCron = require('../workers/delete-cron.js');
var path = require('path');

var port = process.env.PORT || 4568;

var app = express();

require('./config/config.js')(app, express);

deleteCron.fileWatcher();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.use(function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});

