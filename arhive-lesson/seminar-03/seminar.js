/**
 * Задача про call и apply
 */

const ProductObj = {
    name: 'smartphone',
    price: 500,

    getDescription(discount) {
        const finalPrice = this.price - discount;
        return `Товар ${this.name} будет стоить ${finalPrice}`;
    },
}

function calculateDiscount(procent) {
    return (this.price * procent) / 100;
}

const callProduct = calculateDiscount.call(ProductObj, 30);
console.log(callProduct);

const applyProduct = calculateDiscount.apply(ProductObj, [50]);
console.log(applyProduct);

const descriptionDiscount = ProductObj.getDescription.call(ProductObj, callProduct);
console.log(descriptionDiscount);

/**
 * Задание 1
 * Напишите функцию getPrototypeChain(obj), которая будет
 * возвращать цепочку прототипов для заданного объекта obj. 
 * Функция должна вернуть массив прототипов, начиная от
 * самого объекта и заканчивая глобальным объектом Object.prototype.
 */

function getPrototypeChain(obj) {
    const parents = [];

    while (obj !== null) {
        parents.push(obj);
        obj = Object.getPrototypeOf(obj);
    }

    return parents;
}

console.log(getPrototypeChain({ a: 1 }));

/**
 * Задание 4
 * Создайте класс Animal, который будет представлять животное.
 * У класса Animal должны быть следующие свойства и методы:
 * ● Свойство name (строка) - имя животного.
 * ● Метод speak() - выводит в консоль звук, издаваемый животным.
 * Создайте подкласс Dog, который наследует класс Animal.
 * Для подкласса Dog добавьте дополнительное свойство и метод:
 * ● Свойство breed (строка) - порода собаки.
 * ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.

console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч

/**
 * Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". 
 * Класс должен иметь публичные методы "изменить имя", "изменить возраст" и 
 * "изменить электронную почту",  * которые будут изменять соответствующие поля объекта. 
 * Также класс должен иметь статическое поле "максимальный возраст", 
 * которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
 */

class User {
    #name;
    #age;
    #email;
    static #MAX_AGE = 100;

    constructor(name, age, email) {
        this.#name = name;
        if (age > User.#MAX_AGE) {
            throw new Error("Превышен максимальный допустимый возраст пользователя")
        }
        this.#age = age;
        this.#email = email;
    }

    setName(newName) {
        this.#name = newName;
    }

    setAge(newAge) {
        if (newAge > User.#MAX_AGE) {
            throw new Error("Превышен максимальный допустимый возраст пользователя")
        }
        this.#age = newAge;
    }

    setEmail(newEmail) {
        this.#email = newEmail;
    }

    getInfo() {
        console.log(`Пользователь: имя ${this.#name}, возраст ${this.#age}, эл.почта ${this.#email}`);
    }
}

const vasya = new User('Василий', 15, 'vasya@example.com');
vasya.getInfo();
vasya.setName('Николай');
// vasya.setAge(101);

// const nastya = new User('Настя', 150, 'nastya@example.com');

/**
 * Создать класс "Товар" с приватными полями "название", "цена" и "количество". 
 * Класс должен иметь публичные методы "изменить цену", "изменить количество" и 
 * "получить стоимость", которые будут изменять соответствующие поля объекта и 
 * возвращать стоимость товара соответственно. Также класс должен иметь статическое 
 * поле "максимальное количество", которое будет задавать максимально допустимое 
 * количество товара для всех создаваемых объектов.
 */

class Product {
    #name;
    #price;
    #count;
    static MAX_COUNT = 10;

    constructor(name, price, count) {
        this.#name = name;
        this.#price = price;

        if (count > Product.MAX_COUNT) {
            throw new Error(`Превышено максимальное допустимое количество`);
        }
        this.#count = count;
    }

    set name(newName) {
        this.#name = newName;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get count() {
        return this.#count;
    }
}

const phone = new Product('Iphone', 100, 9);
console.log(phone.name);
phone.name = 'Vivo';
console.log(phone.name);