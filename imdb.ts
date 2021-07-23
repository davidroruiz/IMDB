import { Movie } from "./movie";
export class Imdb
{
    public arrayMovie: Movie[];

    constructor(arrayMovie:Movie[])
    {
        this.arrayMovie = arrayMovie;
    }


    public getArrayMovie(): Movie[] {
        return this.arrayMovie;
    }

    public setArrayMovie(arrayMovie: Movie[]): void {
        this.arrayMovie = arrayMovie;
    }

   public imprimirMovies()
    {    
        let resultadoMovie;
        for(let i = 0; i<this.arrayMovie.length; i++)
        {   
         console.log(this.arrayMovie[i].printMovies());
        }
    }
}
