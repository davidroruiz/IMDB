import { Professional } from "./professional";
import { Movie } from "./movie";

let professionalOne:Professional = new Professional ("Ana de Armas", 33, "feminine", 60, 1.68, "Brown", "Brown", "Caucasian", false, "Cuban", 0, "actress")
let professionalTwo:Professional = new Professional("Javier Bardem", 52, "male", 80, 1.81, "black", "brown", "Caucasian", false, "Spanish", 1, "Actor")
let professionalThree:Professional = new Professional("Johnny Depp", 58,"male", 80, 1.78, "black", "black", "Caucasian", false, "American", 0, "Actor" )

let movie1:Movie = new Movie("Black Panther", 2020, "Britanica","Ciencia Ficcion");


console.log(professionalOne.printAllProfessional())
console.log(professionalTwo.printAllProfessional());
console.log(professionalThree.printAllProfessional());
movie1.setActors([professionalOne]);
movie1.setDirector(professionalTwo)
console.log(movie1.getActors());

console.log(movie1.printMovies());


