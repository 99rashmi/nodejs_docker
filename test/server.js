var express = require("express"); //importing express pacakge

var app = express(); //creating an app

app.use(express.static('app')); 

// listening to port 5000
var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
