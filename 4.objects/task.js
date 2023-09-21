function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

<<<<<<< HEAD
Student.prototype.addMarks = function(...marksToAdd) {
	if ("marks" in this) {
		this.marks.push(...marksToAdd)
	}
}

Student.prototype.getAverage = function() {
	if ("marks" in this) {
		if (this.marks.length === 0) {
			return 0
		} else {
			return this.marks.reduce((acc, el) => acc + el / this.marks.length, 0)
		}
	}
	return 0
=======
Student.prototype.addMarks = function (...marksToAdd) { 
    if("marks" in this.marks){
        marksToAdd.forEach((item) => this.marks.push(item))
    }
}

Student.prototype.getAverage = function () {
    if ("marks" in this.marks) {
      if (this.marks.length > 0) {
      return this.marks.reduce((acc, el) => acc + el / this.marks.length, 0)
      } else { 
          return 0; 
      }
    }
>>>>>>> 452d3bc755d514adbe4c43c920f1c8d86b999130
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
student2.addMarks(4, 5, 4, 5);
console.log(student2)