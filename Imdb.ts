import {movie} from "./movie"

export class Imdb{
    public peliculas: movie[]

constructor(peliculas)
{
    this.peliculas = peliculas
}
showMovies(){
    this.peliculas.forEach(pelicula => pelicula.toPrint())
}

}