const usersDiv = document.querySelector('div.users-container');
const dogsDiv = document.querySelector('div.dogs-container');

const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlDogs = 'https://dog.ceo/api/breeds/image/random';

function showUsers(users) {
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h2 class="name">User Profile</h2>
            <b>Name: </b><span>${user.name}</span>
            <b>Username: </b><span>${user.username}</span>
            <b>Email: </b><span>${user.email}</span>
            <b>Address: </b><span>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</span>
            <b>Phone: </b><span>${user.phone}</span>
            <b>Website: </b><span>${user.website}</span>
            <b>Company: </b><span>${user.company.name}</span>
            <button class="delete-btn">Delete</button>
        `;
        usersDiv.appendChild(userDiv);

        const deleteBtn = userDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (event) => deleteUser(event));
    });
}

function deleteUser(event) {
    const userDiv = event.target.parentElement;
    userDiv.parentElement.removeChild(userDiv);
}

axios.get(urlUsers)
    .then(response => showUsers(response.data))
    .catch(error => console.error('Ошибка при получении списка пользователей:', error));

const getDog = (url) => {
    const img = document.createElement('img');
    img.src = url;
    dogsDiv.appendChild(img);
}

const renderDogImages = async (count) => {
    try {
        for (let i = 0; i < count; i++) {
            const response = await axios.get(urlDogs);
            const imageUrl = response.data.message;
            getDog(imageUrl);
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

renderDogImages(10);