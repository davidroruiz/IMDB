import { Movie } from './movie';
import { Imdb } from './imdb';

let movie1: Movie = new Movie("Pirates The Caribbean", 2020, "Britanica", "Ciencia Ficcion");

let imdb: Imdb = new Imdb([movie1]);

var readLineSync = require('readline-sync');
let title: string = readLineSync.question('titulo ');
let year: number = readLineSync.question('ayoNacimiento ');
let nacionality: string = readLineSync.question('nacionalidad ');
let genre: string = readLineSync.question('genero ');
let movieReadLine: Movie = new Movie(title, year, nacionality, genre);

let readJsonFile: Imdb = imdb.obtenerInstanciaIMDB('imdbBBDD');

let arrayMovies: Movie[] = [];
for (const keyPelis in readJsonFile.arrayMovie) {

    let arrayTheAtributos:any[] = [];
    for (const key in readJsonFile.arrayMovie[keyPelis]) {
        arrayTheAtributos.push(readJsonFile.arrayMovie[keyPelis][key]);
        
    };
    arrayMovies.push(new Movie(arrayTheAtributos[0], arrayTheAtributos[1], arrayTheAtributos[2], arrayTheAtributos[3]));
};
arrayMovies.push(movieReadLine);

let raedSIMDBS = new Imdb(arrayMovies);
raedSIMDBS.escribirEnFicheroJSON("imdbBBDD");