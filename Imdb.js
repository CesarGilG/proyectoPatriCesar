"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printMovies = function () {
        this.peliculas.forEach(function (pelicula) { return pelicula.toPrint(); });
    };
    Imdb.prototype.showMovie = function () {
        this.peliculas.forEach(function (pelicula) { return console.log(pelicula); });
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var fs = require('fs');
        fs.writeFileSync('./prueba4.json', JSON.stringify(this.peliculas));
    };
    return Imdb;
}());
exports.Imdb = Imdb;
