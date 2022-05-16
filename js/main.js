// listni chaqirish
let kinolar2 = kinolar.splice(0, 100)
let elMovieList = $(".js-movies-list");

let elPokemonFunc = function(films) {

  let elMovieItem = createElement("li", "pokemons-item card m-3");

  let elMovieCast = createElement("p","cast fw-bold" , `Cast: ${films.cast.join(", ")}`);
  let elMovieGanres = createElement("p","ganres fw-bold",`Genres: ${ films.genres.join(", ")}`);
  let elMovieTitle = createElement("p","title fw-bold", `Title: ${films.title}`);
  let elMovieYear = createElement("p","year fw-bold" , `Year: ${films.year}`);

  elMovieItem.append(elMovieCast, elMovieGanres, elMovieTitle, elMovieYear);
  elMovieList.appendChild(elMovieItem);
}
kinolar2.forEach(function(films){
  elPokemonFunc(films);
})
