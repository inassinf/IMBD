import { Professional } from "./professional";

let will = new Professional("Will Smith",54,  80, 1.88, false, "americano", 4, "Actor");
let spielberg = new Professional("Steven Spielberg", 74, 70, 1.72, true, "americano", 50, "Director");
let penelope = new Professional("Penelope Cruz", 48, 70, 1.69, false, "espaniola", 1, "Actriz");


export class Movie{

    title: string
    releaseYear: number
    actors: Professional[]
    nacionality: string
    director: Professional
    writer: Professional
    language: string
    plataforma: string
    isMCU: boolean
    mainCharacterName: string
    producer: string
    distributor: string
    genre: string

    constructor(title: string, releaseYear: number, nacionality: string, genre: string){

      this.title = title; 
      this.releaseYear = releaseYear;
      this.nacionality = nacionality;
      this.genre = genre;
    
    }



  print(){
    return ("Los creditos de la pelicula son: " + "Titulo: " + this.title + " anio de creacion: " + this.releaseYear +
    " Pais: " + this.nacionality + " Genero: " + this.genre + " Actores: " + this.actors + " Director:" + this.director.printName() +
    " Guionista: " + this.writer.printName() + " Idioma: " + this.language + " Plataforma " + " isMCU: " + this.isMCU + " Protagonista: " 
    + this.mainCharacterName + " Productor: " + this.producer + " Distribuidor: " + this.distributor + " Genero: " + this.genre);
    
  }

}