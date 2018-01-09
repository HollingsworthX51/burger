var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + '/public'));
//static folder

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');
//references routes.js
var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = 3000;
app.listen(port);