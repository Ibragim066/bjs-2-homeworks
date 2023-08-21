// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state = this.state * 1.5;
    }

    set state(stateNew) {
        if (stateNew < 0) {
            this._state = 0;
        } else if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2

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
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        }

        return null;
    }

    giveBookByName(bookName) {
        let giveBook = this.books.find(book => book.name === bookName);
        if (typeof giveBook === 'object') {
            let index = this.books.indexOf(giveBook);
            this.books.splice(index, 1);
            return giveBook;
        }

        return null;
    }
}

// Задача 3

class Student {
    constructor(name) {
        this.name = name
        this.marks = {}
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return
        }

        if (!this.marks[subject]) {
            this.marks[subject] = []
        }

        this.marks[subject].push(mark)
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0
        }

        return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks)
        if (subjects.length === 0) {
            return 0
        }

        return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length;
    }
}

