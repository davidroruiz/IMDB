class Professional
{
    public name: string;
    public age: number;
    public genre:string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired:boolean;
    public nationality: string;
    public oscarNumbers: number;
    public profession: string;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getHairColor(): string {
        return this.hairColor;
    }

    public setHairColor(hairColor: string): void {
        this.hairColor = hairColor;
    }

    public getEyeColor(): string {
        return this.eyeColor;
    }

    public setEyeColor(eyeColor: string): void {
        this.eyeColor = eyeColor;
    }

    public getRace(): string {
        return this.race;
    }

    public setRace(race: string): void {
        this.race = race;
    }

    public isIsRetired(): boolean {
        return this.isRetired;
    }

    public setIsRetired(isRetired: boolean): void {
        this.isRetired = isRetired;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getOscarNumbers(): number {
        return this.oscarNumbers;
    }

    public setOscarNumbers(oscarNumbers: number): void {
        this.oscarNumbers = oscarNumbers;
    }

    public getProfession(): string {
        return this.profession;
    }

    public setProfession(profession: string): void {
        this.profession = profession;
    }

    
    constructor(name:string, age:number, genre:string, weigth:number,
                height: number, hairColor: string, eyeColor: string, 
                race:string, isRetired:boolean, nationality:string, 
                oscarNumbers:number, profession:string )
        {
            this.name=name;
            this.age=age;
            this.genre=genre;
            this.weight=weigth;
            this.height=height;
            this.hairColor=hairColor;
            this.eyeColor=eyeColor;
            this.race=race;
            this.isRetired=isRetired;
            this.nationality=nationality;
            this.oscarNumbers=oscarNumbers;
            this.profession=profession;
        }

        
}
