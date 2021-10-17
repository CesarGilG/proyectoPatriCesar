"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
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
        var fs = require('fs');
        fs.writeFileSync("./" + nombreFichero + ".JSON", JSON.stringify(this.peliculas));
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var fs = require('fs');
        if (fs.statSync("./").isFile(nombreFichero + ".JSON") == true) {
            fs.readFileSync("./" + nombreFichero + ".JSON");
            var imdbresultante = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero + ".JSON"))));
            return imdbresultante;
        }
        else {
            this.escribirEnFicheroJSON(nombreFichero);
            fs.readFileSync("./" + nombreFichero + ".JSON");
            var imdbresultante = new Imdb((JSON.parse(fs.readFileSync("./" + nombreFichero + ".JSON"))));
            return imdbresultante;
        }
    };
    return Imdb;
}());
exports.Imdb = Imdb;
