import {movie} from "./movie"

export class Imdb{
    public peliculas: movie[]

constructor(peliculas)
{
    this.peliculas = peliculas
}
printMovies(){
    this.peliculas.forEach(pelicula => pelicula.toPrint())
}

showMovie(){
    this.peliculas.forEach(pelicula => console.log(pelicula))
}
escribirEnFicheroJSON(nombreFichero:string)
{
    const fs =require('fs')
    nombreFichero= 

    fs.writeFileSync('./prueba4.json', JSON.stringify(this.peliculas));
}
// obtenerInstanciaIMDB(nombreFichero:string):Imdb
// {

// }

}
