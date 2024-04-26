/**
 * Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. 
 * Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, 
 * включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
 * Person.name = "John";
 * Person.age = 25;
 * Person.gender = "male";
 * Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
 * Person.changeName("Mike");
 */

const Person = {
    name: "...",
    age: "...",
    gender: "...",

    changeName: function (newName) {
        this.name = newName;
    },
    changeAge: function (newAge) {
        this.age = newAge;
    },
    changeGender: function (newGender) {
        this.gender = newGender;
    },
    introduce: function () {
        return `My name is  ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`;
    },
};

console.log(Person.name);
console.log(Person.age);
console.log(Person.gender);

Person.changeName("Mike");
Person.changeAge("25");
Person.changeGender("Male");

console.log(Person.introduce());

/**
 * Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест.
 * Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. 
 * Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.
 * Одалживание метода eat() из объекта Animal к объекту Dog
 * Dog.eat = Animal.eat;
 * Dog.eat(); // Вывод: Rex is eating.
 */

const Animal = {
    name: '...',

    eat() {
        return `Животное ${this.name} ест`;
    }
}

const Dog = {
    name: '...',

    bark() {
        return `Собака ${this.name} лает`;
    }
}

Dog.name = 'Rex';
Dog.eat = Animal.eat;
console.log(Dog.eat());

/**
 * Создайте объект calculator с методами add(), subtract() и multiply(), 
 * которые выполняют соответствующие математические операции над двумя числами. 
 * Используйте методы call и apply для вызова этих методов с передачей аргументов.
 * console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
 * console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
 */

const calculator = {
    add(numOne, numTwo) {
        return numOne + numTwo;
    },
    subtract(numOne, numTwo) {
        return numOne - numTwo;
    },
    multiply(numOne, numTwo) {
        return numOne * numTwo;
    }
}

const obj = {
    numOne: 15,
    numTwo: 10
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));

console.log(calculator.add.call(obj, obj.numOne, obj.numTwo));
console.log(calculator.subtract.apply(obj, [obj.numOne, obj.numTwo]));

/**
 * Создайте класс Person, который имеет свойства name и age, а также метод introduce(), 
 * который выводит сообщение с представлением имени и возраста персоны.
 * const person = new Person("John", 25);
 * person.introduce(); // Вывод: My name is John and I'm 25 years old.
 */

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}

const personNew = new PersonClass('Петр', 17)
console.log(personNew);
console.log(personNew.name);
console.log(personNew.age);
console.log(personNew.introduce());

class personTwo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greeting = function () {
            console.log(`My name is ${this.name} and I'm ${this.age} years old`);
        };
    }
}

const Bob = new personTwo('Bob', 20);
Bob.greeting;

/**
 * Создайте класс BankAccount, который представляет банковский счет.
 * У него должны быть свойства accountNumber (номер счета) и balance (баланс), 
 * а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. 
 * Класс должен иметь также статическое свойство bankName, которое содержит название банка.
 * const account1 = new BankAccount("1234567890", 1000);
 * account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
 * account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
 * account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
 */

class BankAccount {
    static bankName = 'Sber';

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.bankName = BankAccount.bankName;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}

const account = new BankAccount("1234567890", 1000);
console.log(account);
account.deposit(500);
account.withdraw(200);
account.withdraw(1500);
