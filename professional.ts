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
