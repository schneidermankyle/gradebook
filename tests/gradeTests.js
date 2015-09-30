var book = require("../libs/grades").book;

exports["setUp"] = function(callback) {
	book.clearGrades();
	callback();
};

exports["Can compute letter grade of A"] = function(test) {
	book.addGrade(100);
	book.addGrade(90);

	var result = book.getLetterGrade();

	test.equal(result, 'A');
	test.done();
};

exports['Can add new grade'] = function(test) {
	book.addGrade(90);
	var count = book.getCount();

	test.equal(count, 1);
	test.done();
};

exports['Can agerage grades'] = function(test) {
	book.addGrade(100);
	book.addGrade(50);

	var average = book.getAverage();

	test.equal(average, 75);
	test.done();
};