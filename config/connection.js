//dependencies
var mysql = require('mysql');

//create mysql connection object
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(err){
	if(err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});




//export connection for ORM use
module.exports = connection;