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
    fs.writeFileSync("./" + nombreFichero +".JSON",JSON.stringify(this.peliculas));
}
obtenerInstanciaIMDB(nombreFichero:string):Imdb{
   var fs =require('fs')
   if (fs.statSync("./").isFile(nombreFichero + ".JSON") == true){
    fs.readFileSync("./" + nombreFichero +".JSON")
    let imdbresultante:Imdb = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero +".JSON"))))
    return imdbresultante
    }else{
    this.escribirEnFicheroJSON(nombreFichero)
    fs.readFileSync("./" + nombreFichero +".JSON")
    let imdbresultante:Imdb = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero +".JSON"))))
    return imdbresultante
}

}
}


