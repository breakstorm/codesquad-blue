var express = require('express')
var app = express()

app.listen(3000, function(){
	console.log("hello world")
});

//static file process
app.use(express.static('public'));


//rul routing
app.get('/', function(req,res){
	// res.send("hi firend.");
	res.sendFile(__dirname + "/public/main.html")
})

app.get('/<main></main>', function(req,res){
	// res.send("hi firend.");
	res.sendFile(__dirname + "/public/main.html")
})