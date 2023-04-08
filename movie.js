"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var professional_1 = require("./professional");
var will = new professional_1.Professional("Will Smith", 54, 80, 1.88, false, "americano", 4, "Actor");
var spielberg = new professional_1.Professional("Steven Spielberg", 74, 70, 1.72, true, "americano", 50, "Director");
var penelope = new professional_1.Professional("Penelope Cruz", 48, 70, 1.69, false, "espaniola", 1, "Actriz");
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.print = function () {
        return ("Los creditos de la pelicula son: " + "Titulo: " + this.title + " anio de creacion: " + this.releaseYear +
            " Pais: " + this.nacionality + " Genero: " + this.genre + " Actores: " + this.actors + " Director:" + this.director.printName() +
            " Guionista: " + this.writer.printName() + " Idioma: " + this.language + " Plataforma " + " isMCU: " + this.isMCU + " Protagonista: "
            + this.mainCharacterName + " Productor: " + this.producer + " Distribuidor: " + this.distributor + " Genero: " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
