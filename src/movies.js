const moviesArea = document.getElementById('movies');
const selectMovie = document.getElementById('movie-select');
const homeBtn = document.getElementById('homepage-btn');

homeBtn.addEventListener('click', () => {
location.href = '/index.html';
});

/**
 * When user selects movie the area is cleared and data for selection are fetched
 */
selectMovie.addEventListener('change', (event) => {
    const selectValue = event.target.value;
    const url = 'https://api.tvmaze.com/search/shows?q=' + selectValue;
    moviesArea.innerHTML = '';
    getMovie(url);
});

const getMovie = async(url) => {
    const result = await fetch(url);
    const data = await result.json();

    data.forEach(movieElement => {
        createMovie(movieElement);
    });
}

/**
 * Creates movie element with image
 * @param movieElement contains data from fetch
 */
const createMovie = (movieElement) => {
  const image = movieElement.show.image?.original;
  const movieName = movieElement.show.name;
  
  if (!(image == undefined || image == null)) {
    const movie = document.createElement("img");
    movie.src = image;
    movie.alt = movieName;
    movie.classList.add('movie-poster');

    moviesArea.append(movie);
  }
}
