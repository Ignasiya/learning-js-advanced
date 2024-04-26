// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.

// В setTimeout мы передаем не просто наш метод, а функцию, которая привязана к нашему объекту.Метод bind возвращает новую функцию, с уже привязанным контекстом, именно она вызывается по истечении времени.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;

// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван(об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);

setTimeout(Roomba.goCharge.bind(Roomba), 3000);
// I am cleaning... I have been started: 1 times.
// UV lamp is not working.
// I am going to charge...