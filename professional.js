"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, gnere, weight, height, hairColor, eyeColor, race, isRetired, nacionality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.gnere = gnere;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nacionality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.persona = function (Professional) {
        console.log(Professional);
    };
    return Professional;
}());
exports.Professional = Professional;
