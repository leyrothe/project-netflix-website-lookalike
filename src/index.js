const registerBtn = document.getElementById('sign-up');
const moviesBtn = document.getElementById('other-movies');

registerBtn.addEventListener('click', () => {
    location.href = './register.html';
});

moviesBtn.addEventListener('click', () => {
    location.href = './movies.html';
});