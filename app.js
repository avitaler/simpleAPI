//Lets require/import the HTTP module
var http = require('http');
var express = require('express');


var app = express();


app.use('/', function(res,req){
    res.status(200).json({message:'OK'});
})
//Lets define a port we want to listen to
const PORT=9999;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});