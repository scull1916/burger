var express = require("express");

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//Serve static content for the app from the "assets" directory (in the "public" directory)
app.use(express.static("public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give handlebars access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start the server so that it can listen to client requests
app.listen(PORT, function()
	{
		//Log server side when the servers starts listening
		console.log("Listening on http:/localhost:" + PORT);

	});