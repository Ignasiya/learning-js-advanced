// Создадим робот пылесосSamba.
const Samba4 = new Samba(101);
// Попробуем обратиться к стандартному методу toString, хоть мы его и не объявляли ни в одном из объектов.
console.log(Samba1.toString()); // [object Object]

// Создадим пустой объект без прототипа.
const Samba1 = Object.create(null);

// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__
console.log(Samba1.toString); // undefined
console.log(Samba1.__proto__); // undefined