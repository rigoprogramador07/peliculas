const container = document.querySelector(".container");

const movies = [
  { name: "Inception", image: "images/movie1.jpg" },
  { name: "The Dark Knight", image: "images/movie2.jpg" },
  { name: "Interstellar", image: "images/movie3.jpg" },
  { name: "Dunkirk", image: "images/movie4.jpg" },
  { name: "Tenet", image: "images/movie5.jpg" },
  { name: "The Prestige", image: "images/movie6.jpg" },
  { name: "Memento", image: "images/movie7.jpg" },
  { name: "Batman Begins", image: "images/movie8.jpg" },
  { name: "Insomnia", image: "images/movie9.jpg" },
];

const showMovies = () => {
  let output = "";
  movies.forEach(
    ({ name, image }) =>
      (output += `
        <div class="card">
          <img class="card--avatar" src="${image}" alt="${name} Poster" />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href="#">Details</a>
        </div>
      `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showMovies);
