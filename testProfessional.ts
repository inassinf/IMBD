import { Professional } from "./professional";

let pelicula1 = new Professional("Nomadland", 2, 3,5, false, "EEUU", 3, "Chloe Zhao");
let pelicula2 = new Professional("Parasitos", 4, 2, 3, true, "Corea del Sur", 4, "Bong Joon-ho");
let pelicula3 = new Professional("La Forma del agua", 5, 2, 4, true, "EEUU", 4, "Guillermo del Toro");

console.log(pelicula1.printDatos());
console.log(pelicula2.printDatos());
console.log(pelicula3.printDatos());


