"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var readline = require("readline");
var fs = require("fs");
var pelicula = new movie_1.movie("", 0, "", "");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Nombre de la película? ', function (answer) {
    pelicula.title = answer;
    rl.question('Año en que se produjo? ', function (answer) {
        pelicula.releaseYear = parseInt(answer);
        rl.question('Nacionalidad de la película? ', function (answer) {
            pelicula.nacionality = answer;
            rl.question('Genero de la película? ', function (answer) {
                pelicula.genre = answer;
                fs.writeFile("imdbBBDD.JSON", JSON.stringify(pelicula), function () {
                    fs.readFile("imdbBBDD.JSON", "utf8", function (err, lectura) {
                        console.log(lectura);
                        rl.close();
                    });
                });
            });
        });
    });
});
// process.stdout.write("Nombre de la película?: ")
// process.stdin.addListener('data',function(data){ 
//     pelicula.title = data.toString().trim();
// });
// process.stdout.write("Año en que se produjo?: ")
// process.stdin.addListener('data',function(data){ 
//     pelicula.releaseYear = +data.toString();
//     process.exit();
// });
// process.stdout.write("Nacionalidad de la película?: ")
// process.stdin.addListener('data',function(data){ 
//     pelicula.title = data.toString();
//     process.exit();
// });
// process.stdout.write("Genero de la película?: ")
// process.stdin.addListener('data',function(data){ 
//     pelicula.title = data.toString();
//     process.exit();
// });
// console.log(pelicula)
