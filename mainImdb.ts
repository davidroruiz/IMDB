import { Movie } from "./movie";
import { Professional } from './professional';
import { Imdb } from './imdb';


let movie3: Movie = new Movie("Pirates The Caribbean", 2020, "Britanica", "Ciencia Ficcion");
let professionalFour: Professional= new Professional("David", 30,"masculino",50, 1.40,"brown","black","Caucassian", false, "Nigeriano", 5, "Actor");
let professionalFive: Professional= new Professional("Amanda", 50,"femenino",70, 1.80,"brown","black","Caucassian", true, "Spanish", 0, "Actor");
let professionalSix: Professional = new Professional("Javier Bardem", 52, "male", 80, 1.81, "black", "brown", "Caucasian", false, "Spanish", 1, "Actor")
let imdb: Imdb = new Imdb([movie3]);

movie3.setActors([professionalFour]);
movie3.setWriter(professionalFive);
movie3.setLanguage("English");
movie3.setPlataform("3D");
movie3.setIsMCU(true);
movie3.setMainCharacterName("Enrique");
movie3.setProducer("Marco Polo");
movie3.setDistributor("Walt Disney ");
movie3.setDirector(professionalSix);

imdb.escribirEnFicheroJSON("imdbBBDD");

console.log(imdb.obtenerInstanciaIMDB("imdbBBDD"));
