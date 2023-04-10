"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printMovie = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            return (this.peliculas[i].print());
        }
    };
    return Imdb;
}());
exports.Imdb = Imdb;
