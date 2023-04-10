import { Movie } from "./movie";
import {Imdb } from "./Imdb";
import {Professional } from "./professional";

import { titanic} from "./testMovie";
import { tiburon } from "./testMovie";


let volver = new Movie("Volver", 2006, "Espania", "Drama");
let marAdentro = new Movie("Mar Adentro", 2004, "Espania", "Drama");
// let peliculasFavoritas = [tiburon, titanic, volver, marAdentro];
let cine = new Imdb([tiburon, titanic, volver, marAdentro]);
console.log("Mis pelis favoritas son: " + cine.printMovie());
