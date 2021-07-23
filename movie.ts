import { Professional } from "./professional";
export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }

    public getActors(): Professional[] {
        return this.actors;
    }

    public setActors(actors: Professional[]): void {
        this.actors = actors;
    }

    public getNacionality(): string {
        return this.nacionality;
    }

    public setNacionality(nacionality: string): void {
        this.nacionality = nacionality;
    }

    public getDirector(): Professional {
        return this.director;
    }

    public setDirector(director: Professional): void {
        this.director = director;
    }

    public getWriter(): Professional {
        return this.writer;
    }

    public setWriter(writer: Professional): void {
        this.writer = writer;
    }

    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(language: string): void {
        this.language = language;
    }

    public getPlataform(): string {
        return this.plataform;
    }

    public setPlataform(plataform: string): void {
        this.plataform = plataform;
    }

    public isIsMCU(): boolean {
        return this.isMCU;
    }

    public setIsMCU(isMCU: boolean): void {
        this.isMCU = isMCU;
    }

    public getMainCharacterName(): string {
        return this.mainCharacterName;
    }

    public setMainCharacterName(mainCharacterName: string): void {
        this.mainCharacterName = mainCharacterName;
    }

    public getProducer(): string {
        return this.producer;
    }

    public setProducer(producer: string): void {
        this.producer = producer;
    }

    public getDistributor(): string {
        return this.distributor;
    }

    public setDistributor(distributor: string): void {
        this.distributor = distributor;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    
    public printMovies() {

        let printMovies = {
            "Title: ": this.title,
            "ReleaseYear: ": this.releaseYear,
            "Actors: ": this.actors,
            "Nacionality: ": this.nacionality,
            "Director: ": this.director,
            "Writer: ": this.writer,
            "Language: ": this.language,
            "Plataform: ": this.plataform,
            "isMCU: ": this.isMCU,
            "MainCharacterName: ": this.mainCharacterName,
            "Producer: ": this.producer,
            "Distributor: ": this.distributor,
            "Genre: ": this.genre
        };
        return printMovies
    }

}