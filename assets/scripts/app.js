const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];
const entryTextSection = document.getElementById('entry-text');
const deleteModal = document.getElementById('delete-modal');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const showMovieModalHandler = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const closeMovieModalHandler = () => {
  addMovieModal.classList.remove('visible');
};

const backdropClickHandler = () => {
  closeMovieModalHandler();
  closeMovieDeletionModal();
  clearMovieInputs();
};

const cancelAddMovieBtnClickHandler = () => {
  closeMovieModalHandler();
  toggleBackdrop();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModalHandler();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const startDeleteMovieHandler = movieId => {
  deleteModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteModal.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click', closeMovieModalHandler);
  cancelDeletionButton.addEventListener('click', closeMovieModalHandler);

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteModal.querySelector('.btn--danger');
  confirmDeletionButton.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, movieId)
  );
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteModal.classList.remove('visible');
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
      <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
      </div>
    </div>
  `;

  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

startAddMovieButton.addEventListener('click', showMovieModalHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieBtnClickHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
