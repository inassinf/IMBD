export class Professional {

  name: string
  age: number
  weight: number
  height: number
  isRetired: boolean
  nationality: string
  oscarsNumber: number
 profession: string

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, 
        nationality: string, oscarsNumber: number, profession: string) {
       
          this.name = name;
          this.age = age;
          this.weight = weight;
          this.height = height;
          this.isRetired = isRetired;
          this.nationality = nationality;
          this.oscarsNumber = oscarsNumber;
          this.profession = profession;
                 
    }
  
    printDatos():void {
        console.log("Los datos son los siguientes: " + "Nombre: " + this.name + " Edad: " + this.age +
        " Peso: " + this.weight + " Altura: " + this.height + " Retirado: " + this.isRetired + " Pais: " +
         this.nationality + " Oscars: "  + this.oscarsNumber  + " Profesion: " + this.profession);
   }

   

}