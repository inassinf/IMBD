import { Professional } from "./professional";

let will = new Professional("Will Smith",54,  80, 1.88, false, "americano", 4, "Actor");
let spielberg = new Professional("Steven Spielberg", 74, 70, 1.72, true, "americano", 50, "Director");
let penelope = new Professional("Penelope Cruz", 48, 70, 1.69, false, "espaniola", 1, "Actriz");

console.log(will.printDatos());
console.log(spielberg.printDatos());
console.log(penelope.printDatos());


