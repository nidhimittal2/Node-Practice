/* require http,url,fs module */

var http = require('http');  
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){

/* capture url's "path" part */

var q = url.parse(req.url,true).path;

/* Decide which html is to be shown */

if(q="login.html"){

/* read the required html */

  fs.readFile(q,function(err,data){
  
  /* send the required html to res object */
  
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(data);
  res.end();
  
  });
  }
  }).listen(8080);
  
  
  http.createServer(function(req,res){

/* capture url's "path" part */

var q1 = url.parse(req.url,true).path;

/* Decide which html is to be shown */

if(q1="home.html"){

/* read the required html */

  fs.readFile(q1,function(err,data){
  
  /* send the required html to res object */
  
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(data);
  res.end();
  
  });
  }
  }).listen(8081);
