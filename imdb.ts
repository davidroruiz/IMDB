import { Movie } from "./movie";
export class Imdb {
    public arrayMovie: Movie[];

    constructor(arrayMovie: Movie[]) {
        this.arrayMovie = arrayMovie;
    }


    public getArrayMovie(): Movie[] {
        return this.arrayMovie;
    }

    public setArrayMovie(arrayMovie: Movie[]): void {
        this.arrayMovie = arrayMovie;
    }

    public imprimirAllMovies() {
        for (let i = 0; i < this.arrayMovie.length; i++) {
            console.log(this.arrayMovie[i].printMovies());
        }
    }

    public creacionJSONTheObjectIMDB() {
        const myJSON = JSON.stringify(this.arrayMovie);

        return myJSON;
    }

    public writerObjectJSON() {
        const fs = require('fs');
        const filePath = 'imdbBBDD.json';

        fs.writeFileSync(filePath, this.creacionJSONTheObjectIMDB());
    }

    public readerObjectJSON() {
        const fs = require('fs');
        const filePath = 'imdbBBDD.json';

      const reader = fs.readFileSync(filePath,'UTF-8');

        JSON.parse(reader);
      const instanciaReaderObject = new Imdb(reader);

      return instanciaReaderObject;
    }

    public escribirEnFicheroJSON(nombreFichero:string) {
        const fs = require('fs');
        const filePath = nombreFichero + ".json";

        fs.writeFileSync(filePath, this.creacionJSONTheObjectIMDB());
    }

    public obtenerInstanciaIMDB(nombreFichero:string) {
        const fs = require('fs');
        const filePath = nombreFichero + ".json";

        let reader =  JSON.parse(fs.readFileSync(filePath,'UTF-8'));
        
        //const instanciaReaderObject = new Imdb(reader);

        return reader;
    }
}
