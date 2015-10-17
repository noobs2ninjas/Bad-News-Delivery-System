var express = require('express');
var io = require('socket.io')();
var http = require('http');
var app = express();
//var client = require('../lib')('ACCOUNT_SID', 'AUTH_TOKEN');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'jade');
app.use(bodyParser.json());
//index page for creating adding number and text for automated delivery
app.get('/', function(req, res){
  res.render('index');
});

app.get('/call', function(req, res){
	var usersPhone = req.
//Place a phone call, and respond with TwiML instructions from the given URL
	client.makeCall({

	    to: '+16515556677', // Any number Twilio can call
	    from: '', // A number you bought from Twilio and can use for outbound communication
	    url: 'http://badnewsdelivery.herokuapp.com/makeCall' // A URL that produces an XML document (TwiML) which contains instructions for the call

	}, function(err, responseData) {

	    //executed when the call has been initiated.
	    console.log(responseData.from); // outputs "+14506667788"

	});
});

io.on('connection', function(socket){
  	console.log('a user connected');
  	socket.on('call', function(data){

  	});
});

var server = http.createServer(app).listen(80);
io.listen(server);