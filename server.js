var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;
var app = express();