import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from './imdb';


let professionalOne: Professional = new Professional("Ana de Armas", 33, "feminine", 60, 1.68, "Brown", "Brown", "Caucasian", false, "Cuban", 0, "actress")
let professionalTwo: Professional = new Professional("Javier Bardem", 52, "male", 80, 1.81, "black", "brown", "Caucasian", false, "Spanish", 1, "Actor")
let professionalThree: Professional = new Professional("Johnny Depp", 58, "male", 80, 1.78, "black", "black", "Caucasian", false, "American", 0, "Actor")

let movie1: Movie = new Movie("Pirates The Caribbean", 2020, "Britanica", "Ciencia Ficcion");
let movie2: Movie = new Movie("Tenet", 2020, "British-American","Science fiction");
let imdbOne: Imdb = new Imdb([movie1, movie2]);

console.log(professionalOne.printAllProfessional())
console.log(professionalTwo.printAllProfessional());
console.log(professionalThree.printAllProfessional());

movie1.setActors([professionalOne, professionalTwo]);
movie1.setWriter(professionalThree);
movie1.setLanguage("English");
movie1.setPlataform("3D");
movie1.setIsMCU(false);
movie1.setMainCharacterName("Jack Sparrow");
movie1.setProducer("Bruce Hendricks");
movie1.setDistributor("Walt Disney Studios Motion Pictures");
movie1.setDirector(professionalThree);



// console.log(movie1.printMovies())
console.log("Películas Impresas");

 imdbOne.imprimirMovies()
 



