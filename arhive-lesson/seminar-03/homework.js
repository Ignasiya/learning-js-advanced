/** 
 * Задание 1: ""Управление персоналом компании""
 * Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
 * Свойство name (имя) - строка, имя сотрудника.
 * Метод displayInfo() - выводит информацию о сотруднике (имя).
 * Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
 * Свойство department (отдел) - строка, отдел, в котором работает менеджер.
 * Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
*/

class Employee 
{
    constructor (name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Сотрудник ${this.name}`);
    }
}

class Manager extends Employee 
{
    constructor (name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Сотрудник ${this.name}, отдел ${this.department}`);
    }
}

const employee = new Employee('Иван Иванов');
employee.displayInfo();

const manager = new Manager('Петр Петров', 'Отдел разработки');
manager.displayInfo();

/**
 * ""Управление списком заказов""
 * Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
 * Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
 * Свойство products (продукты) - массив, содержащий список продуктов в заказе.
 * Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
 * Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
*/

class Product 
{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order 
{
    constructor(orderNumber, product = []) {
      this.orderNumber = orderNumber;
      this.products = product;
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}

const order = new Order(1);

const pizza = new Product('pizza', 400);
const coffee = new Product('coffee', 125);

order.addProduct(pizza);
order.addProduct(coffee);
console.log(order.getTotalPrice());


/** 
 * Управление животными в зоопарке
 * Вы разрабатываете систему управления животными в зоопарке. 
 * Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:
 * Приватные поля:
 * #name: имя животного (строка).
 * #age: возраст животного (число).
 * #gender: пол животного (строка).
 * Публичные методы:
 * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
 * changeName(newName): изменяет имя животного на новое.
 * changeAge(newAge): изменяет возраст животного на новый.
 * Статическое поле:
 * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).
 * Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, 
 * что вы используете приватные поля и статическое поле в соответствии с описанием.
*/

class ZooAnimal
{
    #name;
    #age;
    #gender;
    static MAX_AGE = 20;

    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    changeName(newName) {
        this.#name = newName;
    }
    
    changeAge(newAge) {
        if (newAge <= ZooAnimal.MAX_AGE) {
            this.#age = newAge;
        } else {
            throw new Error("Превышен максимальный допустимый возраст животного")
        }
    }
}

const cat = new ZooAnimal('Мурка', 5, 'женский');
console.log(cat);

cat.changeName('Киса');
cat.changeAge(10);

cat.changeAge(21);