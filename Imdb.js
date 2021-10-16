"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.showMovies = function () {
        this.peliculas.forEach(function (pelicula) { return pelicula.toPrint(); });
    };
    return Imdb;
}());
exports.Imdb = Imdb;
