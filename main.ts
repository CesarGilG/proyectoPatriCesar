import { movie } from "./movie";
import * as readline from 'readline';
import * as path from 'path';
let fs = require("fs");


let pelicula = new movie("",0,"","")

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Nombre de la película? ', (answer) => {
      pelicula.title = answer 
      rl.question('Año en que se produjo? ', (answer) => {
        pelicula.releaseYear = parseInt(answer) 
        rl.question('Nacionalidad de la película? ', (answer) => {
            pelicula.nacionality = answer 
            rl.question('Genero de la película? ', (answer) => {
                pelicula.genre = answer 
                fs.writeFile("imdbBBDD.JSON",JSON.stringify(pelicula),()=>{
                    fs.readFile("imdbBBDD.JSON","utf8",(err,lectura)=>{
                        console.log(lectura);
                        rl.close() })
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