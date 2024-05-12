// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function