//let $ = require('jQuery');
var express = require('express');
//var path = require('path');
//var favicon = require('static-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var app = express();
//app.use(favicon());
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.redirect('/public/index.html');
});

app.get('/test', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// $.ajax({
//  'url': 'https://adxsync-dev.andrexen.com:4443/search?search=a',
//  'data': {'access_key': 'adxSession=' + '11111111'},
//  'dataType': 'json',
//  'type': 'GET',
//  'success': (data) => {
//	console.log("success data", data);
//  },
//  'error': (err) => {
//	console.log("error err", err);
//  },
//});