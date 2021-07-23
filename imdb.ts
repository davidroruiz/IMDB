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

}
