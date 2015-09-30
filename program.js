var book = require("./libs/grades").book;
var express = require("express");
var app = express();

app.get('/', function(req, res) {
	res.send("Hello, World!");
});

app.get('/grade', function(req, res){
	var grades = req.query.grades.split(',');

	for (var i = 0; i < grades.length; i++) {
		book.addGrade(parseInt(grades[i]));
	}

	var average = book.getAverage();
	var letter = book.getLetterGrade();

	res.send("Your average grade is " + average + " grade " + letter);
});

app.listen(3000);
console.log("Server is ready...");