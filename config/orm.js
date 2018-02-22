//import node dependencies
var connection = require("./connection.js");

var orm = {
//selectAll()
selectAll: function () {
	var queryString = "SELECT * FROM ";
	connection.query(queryString, [], function(){
		if(err) throw err;
		console.log(result);
	});
},
//insertOne()
insertOne: function() {
	var queryString = "";
	connection.query(queryString, [], function(){
		if(err) throw err;
		console.log(result);
	});
},
//updateOne()
updateOne: function() {
	var queryString = "";
	connection.query(queryString, [], function(){
		if(err) throw err;
		console.log(result);
	});
}

};

module.exports= orm;