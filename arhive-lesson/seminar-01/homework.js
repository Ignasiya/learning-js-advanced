/*
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
 решение задание должно состоять из одной строки
*/

const arr = [1, 5, 7, 9]

let min = Math.min(...arr);
console.log(min);

/*
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/
function createCounter() {
    let counter = 0;
    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.decrement());

/*
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

function findElementByClass(el, className) {
    if (el.classList.contains(className)) {
        return el;
    }

    for (let i = 0; i < el.children.length; i++) {

        const foundEl = findElementByClass(el.children[i], className);

        if (foundEl !== null) return foundEl;
    }
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);