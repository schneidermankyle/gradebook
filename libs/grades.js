var gradeBook = {
	//Privates
	_grades: [],

	// Publics
	addGrade: function(grade) {
		this._grades.push(grade);
	},

	getCount: function() {
		return this._grades.length;
	},

	getAverage: function() {
		var sum = 0;

		for (var i = 0; i < this._grades.length; i++) {
			sum += this._grades[i];
		}

		return sum / this._grades.length;
	},

	clearGrades: function() {
		this._grades = [];
	},

	getLetterGrade: function() {
		var average = this.getAverage();
		
		if (average >= 90) {
			return 'A';
		} else if (average >= 80 && average < 90) {
			return 'B';
		} else if (average < 80 && average >= 70) {
			return 'C';
		} else if (average < 70 && average >= 60) {
			return 'D';
		}

		return 'F';
	}
};

exports.book = gradeBook;