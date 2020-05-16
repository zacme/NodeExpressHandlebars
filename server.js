var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//link controller file
var routes = require("/controllers/burgers_controllers");
app.use("/", routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);