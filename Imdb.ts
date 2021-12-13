import {movie} from "./movie"
const fs =require('fs')

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
    let pelicula = JSON.stringify(this.peliculas)
    let archivo ="./" + nombreFichero +".JSON"
    fs.writeFileSync(archivo,pelicula);
}
obtenerInstanciaIMDB(nombreFichero:string):Imdb{
    let archivo = "./" + nombreFichero +".JSON"
    let lectura = fs.readFileSync(archivo)
    let imdbsalida = JSON.parse(lectura)
    let imdbresultante:Imdb = new Imdb(imdbsalida)
    return imdbresultante
}
}


