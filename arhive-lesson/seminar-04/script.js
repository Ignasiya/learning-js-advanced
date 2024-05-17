// Промисы - обещание, ждет ответ или ошибку
const myPromise = new Promise((resolve, reject) => { })

myPromise.then((value) => { }).catch((error) => { });

const url = 'https://jsonplaceholder.typicode.com/users';

// Первый вариант
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(`ошибка ${error}`));

// Второй вариант
const getData = (url) => new Promise((resolve, reject) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
});

getData(url)
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

// Асинхрон
const getData2 = async (url) => {
    try {
        const result = await fetch(url);
        const data = await result.json();

        return data;
    } catch (error) {
        throw new Error('ошибка');
    }
};

const fetchData = await getData2(url);
console.log(fetchData);

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=lIklORK7gjrc1wamIuAIsb4aPPrP4AgwndUbDXtC&count=12';

const getNasa = await getData2(nasaUrl);

const root = document.querySelector('div.nasa');

getNasa.forEach(element => {
    root.insertAdjacentHTML('beforeend', `
    <figure>
        <img src="${element.url}"/>
        <figcaption>${element.explanation}</figcaption>
    </figure>
    `);
});