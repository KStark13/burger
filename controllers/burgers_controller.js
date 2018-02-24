var express = require("express");
var router = express.Router();

//import the model burger.js to use its database functions
var burger = require("../models/burger.js");

//create all routes

router.get("/", function(req, res) {
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
//create a new burger
router.post("/burgers", function(req, res){
	burger.insertOne([
		'burger_name',
		'devoured'
	], [
		req.body.burger_name,
		req.body.devoured
	], function(data) {
		res.redirect('/');
	});
});
//devour a burger
router.put("/burgers/:id", function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/');
	});
});

module.exports = router;