"use strict";
exports.__esModule = true;
var Professional_1 = require("./Professional");
var cameronDiaz = new Professional_1.Professional("Cameron Michelle Diaz", 49, "female", 56, 1.74, "blonde", "blue", "North America", true, "U.S", 0, "actress and model");
var tomHanks = new Professional_1.Professional("Tom Hanks", 65, "male", 79, 1.83, "brunette", "blue", "North America and European", false, "U.S and Greek", 2, "actor, screenwriter, producer and director");
var mariaValverde = new Professional_1.Professional("Maria Valverde", 34, "female", 57, 1.65, "brunette", "brown", "European", false, "Spain", 0, "actress");
cameronDiaz.persona(cameronDiaz);
tomHanks.persona(tomHanks);
mariaValverde.persona(mariaValverde);
