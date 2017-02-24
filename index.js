var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
	secret : new Buffer('YOUR_CLIENT_SECTER-KEY'),
	audience : 'YOUR_CLIENT_ID'
});

app.get('/api/public',function(req,res){
	res.json({message : "PUBLIC ENDPOINT! You dont need authentication."});
});

app.get('/api/private', authCheck, function(req,res){
	
	res.json({message : "PRIVATE ENDPOINT! You DO need authentication."});
});

app.listen(3001);
console.log("LIstening 3001");

