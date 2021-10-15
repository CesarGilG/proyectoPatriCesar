"use strict";
exports.__esModule = true;
exports.movie = void 0;
var movie = /** @class */ (function () {
    function movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    movie.prototype.getTitle = function () {
        return this.title;
    };
    movie.prototype.setTitle = function (titulo) {
        this.title = titulo;
    };
    movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    movie.prototype.setReleaseYear = function (anyo) {
        this.releaseYear = anyo;
    };
    movie.prototype.getActors = function () {
        return this.actors;
    };
    movie.prototype.setNewActor = function (newActor) {
        this.actors.push(newActor);
    };
    movie.prototype.setActors = function (actores) {
        this.actors = actores;
    };
    movie.prototype.getNacionality = function () {
        return this.nacionality;
    };
    movie.prototype.setNacionality = function (nacionalidad) {
        this.nacionality = nacionalidad;
    };
    movie.prototype.getDirector = function () {
        return this.director;
    };
    movie.prototype.setDirector = function (newDirector) {
        this.director = newDirector;
    };
    movie.prototype.getWriter = function () {
        return this.writer;
    };
    movie.prototype.setWriter = function (escritor) {
        this.writer = escritor;
    };
    movie.prototype.getLanguage = function () {
        return this.language;
    };
    movie.prototype.setLanguage = function (idioma) {
        this.language = idioma;
    };
    movie.prototype.getPlataform = function () {
        return this.plataform;
    };
    movie.prototype.setPlataform = function (plataforma) {
        this.plataform = plataforma;
    };
    movie.prototype.getIsMCU = function () {
        return this.isMCU;
    };
    movie.prototype.setIsMCU = function (marvel) {
        this.isMCU = marvel;
    };
    movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    movie.prototype.setMainCharacterName = function (newName) {
        this.mainCharacterName = newName;
    };
    movie.prototype.getProducer = function () {
        return this.producer;
    };
    movie.prototype.setProducer = function (productor) {
        this.producer = productor;
    };
    movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    movie.prototype.setDistributor = function (distribuidor) {
        this.distributor = distribuidor;
    };
    movie.prototype.getGenre = function () {
        return this.genre;
    };
    movie.prototype.setGenre = function (genero) {
        this.genre = genero;
    };
    return movie;
}());
exports.movie = movie;
