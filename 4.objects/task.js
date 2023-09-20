function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) { 
    if("marks" in student1 || student2){
        marksToAdd.forEach((item) => { return this.marks.push(item)})
    } else { return this.marks = undefined }
}

Student.prototype.getAverage = function () {
    if (this.marks.length > 0) {
    return this.marks.reduce((acc, el) => acc + el / this.marks.length, 0)
    } else { return 0; }
}


Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

let student1 = new Student("Василиса","женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
