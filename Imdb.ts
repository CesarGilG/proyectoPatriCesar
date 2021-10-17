import {movie} from "./movie"

export class Imdb{
    public peliculas: movie[]

constructor(peliculas)
{
    this.peliculas = peliculas
}
printMovies(){
    this.peliculas.forEach(peliculilla => peliculilla.toPrint())
}

showMovie(){
    this.peliculas.forEach(pelicula => console.log(pelicula))
}
length():number{
    return this.peliculas.length
}
escribirEnFicheroJSON(nombreFichero:string){
    const fs =require('fs')
    fs.writeFileSync('./pruebaconpatri.json',JSON.stringify(this.peliculas));
}
}


