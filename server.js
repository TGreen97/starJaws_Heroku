// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

/*
 *	STEPS TO SEQUELIZE THE STAR WARS APP.
 *	1. Delete the orm from config. In your app folder, create a model folder
 *     with a character.js file in the model
 *	2. In character.js, model out the character table, as detailed
 *		 in the schema.sql file located in the root of this project directory.
 *	3. Remove all references to the old orm file, 
 *     and replace it with character.js
 *	4. Use Sequlize methods in place of the orm calls 
 *     to retrieve and insert data.
 *
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */



// Dependencies
// =============================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');

// add the character model and sync it.
// Syncing the model will create a matching table in our MySQL db. 
var Character = require("./models")["Character"]
Character.sync(); // creates a characters table




// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
app.use(express.static('app/public'));



// Routes
// =============================================================

require("./routes/api-routes.js")(app)
require("./routes/html-routes.js")(app)




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
