'use strict';

var express = require('express');
//var path = require('path');
//var angular = require('angular');
var app = express();

//angular.module('website');

//app.use(express.static(path.join(__dirname)));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/home.html');
});

app.listen(80);