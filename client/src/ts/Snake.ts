class Snake{
    id:number;
    name:string;
    species:string;
    gender:string;
    venomous:boolean;
    image:string;
    feeding: Feeding[];

    constructor(id:number, name:string, species:string, gender:string, venomous:boolean, image:string, feeding: Feeding[]){
        this.id = id;
        this.name = name;
        this.species = species;
        this.gender = gender;
        this.venomous = venomous;
        this.image = image;
        this.feeding = feeding;
    }
}