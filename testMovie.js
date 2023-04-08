"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var will = new professional_1.Professional("Will Smith", 54, 80, 1.88, false, "americano", 4, "Actor");
var spielberg = new professional_1.Professional("Steven Spielberg", 74, 70, 1.72, true, "americano", 50, "Director");
var penelope = new professional_1.Professional("Penelope Cruz", 48, 70, 1.69, false, "espaniola", 1, "Actriz");
var tiburon = new movie_1.Movie("Tiburon", 1980, "EEUU", "Terror");
tiburon.director = spielberg;
tiburon.actors = [will, penelope];
tiburon.writer = spielberg;
tiburon.language = "Ingles";
tiburon.plataforma = "Planet";
tiburon.isMCU = true;
tiburon.mainCharacterName = "Jose";
tiburon.producer = "Camilo Mena";
tiburon.distributor = "Netflix";
tiburon.plataforma = "Neox";
console.log(tiburon.print());
// {
//     actors= [will,spielberg, penelope],
//     nacionality = "EEUU",
//     director= spielberg,
//     writer= spielberg,
//     language= "Ingles",
//     plataforma= "MCN",
//     isMCU= false,
//     mainCharacterName= "Jason",
//     producer= "James Anderson",
//     distributor= "Hollywood",
//    };
