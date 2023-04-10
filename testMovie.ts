import { Movie } from "./movie";
import { Professional } from "./professional";


let will: Professional = new Professional("Will Smith",54,  80, 1.88, false, "americano", 4, "Actor");
let spielberg: Professional = new Professional("Steven Spielberg", 74, 70, 1.72, true, "americano", 50, "Director");
let penelope: Professional = new Professional("Penelope Cruz", 48, 70, 1.69, false, "espaniola", 1, "Actriz");

 
export let tiburon = new Movie("Tiburon", 1980, "EEUU", "Terror");
tiburon.director= spielberg;
tiburon.actors = [will, penelope];
tiburon.writer = spielberg;
tiburon.language = "Ingles";
tiburon.plataforma = "Planet";
tiburon.isMCU = true;
tiburon.mainCharacterName = "Jose";
tiburon.producer = "Camilo Mena";
tiburon.distributor = "Netflix";
tiburon.plataforma = "Neox";

export let titanic = new Movie("Titanic", 1997, "EEUU", "Drama");
titanic.director= spielberg;
titanic.actors = [will, penelope];
titanic.writer = spielberg;
titanic.language = "Ingles";
titanic.plataforma = "Planet";
titanic.isMCU = true;
titanic.mainCharacterName = "Jose";
titanic.producer = "Camilo Mena";
titanic.distributor = "Netflix";
titanic.plataforma = "Neox";

tiburon.print();
titanic.print();

