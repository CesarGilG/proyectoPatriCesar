"use strict";
//import * as fs from "fs"
exports.__esModule = true;
var movie_1 = require("./movie");
var Imdb_1 = require("./Imdb");
var movie1 = new movie_1.movie("The wolf of Wall Street", 2013, "U.S", "comedy");
movie1.setActors(["Leonardo DiCaprio", " Margot Robie"]);
movie1.setDirector("Martin Scorsese");
movie1.setWriter("Terence Winter");
movie1.setLanguage("English");
movie1.setPlataform("Netflix");
movie1.setIsMCU(false);
movie1.setMainCharacterName("Jordan Belfort");
movie1.setProducer("Leonardo DiCaprio");
movie1.setDistributor("Universal Pictures");
var movie2 = new movie_1.movie("Spider-Man: Homecoming", 2017, "U.S", "sciencie fiction");
movie2.setActors(["Tom Holland", " Michael Keaton", " Zendaya"]);
movie2.setDirector("Jon Whas");
movie2.setWriter("Jonathan Goldstein");
movie2.setLanguage("English");
movie2.setPlataform("Netflix");
movie2.setIsMCU(true);
movie2.setMainCharacterName("Peter Parker");
movie2.setProducer("Kevin Feige");
movie2.setDistributor("	Sony Pictures Releasing2");
var movie3 = new movie_1.movie("The Big Short", 2015, "U.S", "biography");
movie3.setActors(["Christian Bale", " Brad Pitt"]);
movie3.setDirector("Adam Mckay");
movie3.setWriter("Adam Mckay");
movie3.setLanguage("English");
movie3.setPlataform("Netflix");
movie3.setIsMCU(false);
movie3.setMainCharacterName("Michael Burry");
movie3.setProducer("Dede Gardner");
movie3.setDistributor("Paramount Pictures");
var imdb1 = new Imdb_1.Imdb([movie1, movie2, movie3]);
var fs = require('fs');
fs.writeFileSync("./imdb.json", JSON.stringify(imdb1));
var lecturaFichero = new Imdb_1.Imdb((JSON.parse(fs.readFileSync('./imdb.json'))).peliculas);
lecturaFichero.escribirEnFicheroJSON("pruebafichero");
// imdb1.printMovies()
//lecturaFichero.showMovie()
//lecturaFichero.printMovies() ¡¡¡¡¡esto falla!!!!
