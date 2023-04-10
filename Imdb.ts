import { Movie } from "./movie";

export class Imdb {

    peliculas: Movie[]

    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }
  printMovie(){
    for(let i=0; i<this.peliculas.length; i++){
            return (this.peliculas[i].print())

    }
}
}