"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printMovies = function () {
        this.peliculas.forEach(function (peliculilla) { return peliculilla.toPrint(); });
    };
    Imdb.prototype.showMovie = function () {
        this.peliculas.forEach(function (pelicula) { return console.log(pelicula); });
    };
    Imdb.prototype.length = function () {
        return this.peliculas.length;
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var pelicula = JSON.stringify(this.peliculas);
        var archivo = "./" + nombreFichero + ".JSON";
        fs.writeFileSync(archivo, pelicula);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var archivo = "./" + nombreFichero + ".JSON";
        var lectura = fs.readFileSync(archivo);
        var imdbsalida = JSON.parse(lectura);
        var imdbresultante = new Imdb(imdbsalida);
        var fs = require('fs');
        fs.readFileSync("./" + nombreFichero + ".JSON");
        var imdbresultante = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero + ".JSON"))).peliculas);
        return imdbresultante;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
