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
    fs.writeFileSync("./" + nombreFichero+".JSON",JSON.stringify(this.peliculas));
}
obtenerInstanciaIMDB(nombreFichero:string):Imdb
{
  const fs =require('fs')
    fs.readFileSync("./" + nombreFichero +".JSON")
    let imdbresultante:Imdb = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero +".JSON"))).peliculas)
    
  return imdbresultante


}
}


