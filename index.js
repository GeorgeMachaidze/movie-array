const movieArray = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Science Fiction",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action",
  },
];

function addMoviesToStart(array, movie1, movie2) {
  array.unshift(movie2);
  array.unshift(movie1);
  array.push(movie1);
  array.push(movie2);
  array.pop();
  array.pop(array.length - 1);
}

const newMovie1 = {
  title: "Avatar",
  year: 2009,
  director: "James Cameron",
  genre: "Science Fiction",
};

const newMovie2 = {
  title: "The Matrix",
  year: 1999,
  director: "The Wachowskis",
  genre: "Science Fiction",
};

addMoviesToStart(movieArray, newMovie1, newMovie2);

console.log(movieArray);
