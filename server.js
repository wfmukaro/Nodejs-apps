'use strict';
//var http = require('http');
var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
///////////////////////////////
///load express module
const express = require("express");
///create an object of the express module
const app = express();
//app.get("/", function (request, response) {
//    response.send("Hello Class")
//})
//app.listen(port)
/////////////
//routing 
//app.get("/", function (req, res) {
//    res.send("Campus website homepage")
//})

//app.get("/student", function (req, res) {
//    res.send("student portal application")
//})
//app.get("/learning", function (req, res) {
//    res.send("Learning management system")
//})
////default
//app.use(function (req, res) {
//    res.send("the given url does not exist")
//})

//app.listen(port)
//////////////////////////////
///create a routes for music, movies, twits
///home route "/" must print a message;"This application gets twits, music and movies details"
//"/twitter"
//const express = require('express');
//const app = express();
//app.get("/", function (request, response) {
//    response.send("This application get teits, mustic and movies details");
//});
//twits(/Twitter)=>"This is the Twitter details"
//app.get("/Twitter", function (request, response) {
//    response.send("This is the Twitter details");
//});
//music(/music)=>"This is the Music details"
//app.get("/music", function (request, response) {
//    response.send("This is the Music details");
//});
//movies(/movies)=>"This is the Movie details"
//app.get("/movies", function (request, response) {
//    response.send("This is the Movie details");
//});
//app.listen(8081);
