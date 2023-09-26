class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	set state(state) {
		if (state < 0) {
			return this._state = 0;
		} else if (state > 100) {
			return this._state = 100;
		} else {
			return this._state = state
		}
	}
	get state() {
		return this._state
	}
	fix() {
		return this.state *= 1.5
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author
		this.type = "book"
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective"
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] == value) {
				return this.books[i];
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name == bookName) {
				return this.books.shift(this.books[i]);
			}
		}
		return null;
	}
}


const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMark(markToAdd, subjectName) {
		if (2 <= markToAdd && markToAdd <= 5) {
			if (this.marks.hasOwnProperty([subjectName]) === false) {
				this.marks[subjectName] = [];
			}
			this.marks[subjectName].push(markToAdd);
		}
	}
	getAverageBySubject(subjectName) {

		if (this.marks.hasOwnProperty([subjectName])) {
			return this.marks[subjectName].reduce((acc, el) => acc + el / this.marks[subjectName].length, 0);
		} else {
			return 0;
		}
	}
	getAverage() {
		return Object.keys(this.marks).reduce((acc, item, _, arrayAverage) => acc + this.getAverageBySubject(item) / arrayAverage.length, 0);
	}
}

const student = new Student("Олег Никифоров");
student.addMark(1, "химия");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(51, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");
console.log(student.getAverageBySubject("физика"));
console.log(student.getAverageBySubject("биология"));
console.log(student.getAverage());