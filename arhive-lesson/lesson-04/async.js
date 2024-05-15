const getUser = async (url) => {
    // Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response.
    const response = await fetch(url);
    // Выполняем еще один асинхронный метод, преобразования в текст, также ждем результат, который сохраняется в константу пользователь.
    const user = await response.text();
    console.log(user);
}
getUser('https://api.github.com/users/octocat');
// Вывод в консоль.
// {
// "login": "octocat",
// "id": 583231,
// ...
// }
    
const timerId = setInterval(() => {
    if (counter > amount) {
    // После того как наш счетчик достигнет нужного количества итераций, мы должны очистить таймер, чтобы итерации больше не выполнялись.
    clearInterval(timerId);
        console.log('End long calculations');
    }
    // Добавим вывод нашего счетчика через каждые 10000 итераций, чтобы видеть что наш код работает.
    if (counter % 10000 === 0) {
        console.log('working: ', counter);
    }
    const newDate = new Date(counter);
    counter++;
    }, 0);
    // Start long calculations
    // working: 0
    // working: 10000
    // working: 20000
    // End long calculations
    