/**
 * Задание 1: "Управление библиотекой книг"
 * Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
 * Свойство title (название) - строка, название книги.
 * Свойство author (автор) - строка, имя автора книги.
 * Свойство pages (количество страниц) - число, количество страниц в книге.
 * Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
 */

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo = () => {
        console.log(`Книга ${this.title}:\n\tавтор ${this.author},\n\t${this.pages} страниц.\n`);
    }
}

const book = new Book;
book.title = "Laravel";
book.author = "O'reily";
book.pages = 600;
book.displayInfo();

/**
 * Задание 2: "Управление списком студентов"
 * Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
 * Свойство name (имя) - строка, имя студента.
 * Свойство age (возраст) - число, возраст студента.
 * Свойство grade (класс) - строка, класс, в котором учится студент.
 * Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
 */

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo = () => {
        console.log(`имя: ${this.name},\nвозраст: ${this.age},\nкласс: ${this.grade};\n`);
    }
}

const student = new Student("Николай Петров", 12, "6 класс");
student.displayInfo();