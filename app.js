//const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var $ = require("jquery");
//const db = require("./config/db");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/jquery', express.static(path.join(__dirname + './node_modules/jquery/dist/')));
app.use(express.static(path.join(__dirname + '/public')));
app.get('/', (req, res) => {
    res.redirect('./task/home');
});
app.use('/task', require('./routes/approute'));
app.use(express.static('./app/public'));
app.use('/css', express.static(__dirname + './node_modules/bootstrap/dist/css'));

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor rodando na porta " + port));