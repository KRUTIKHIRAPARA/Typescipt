// Simple Class, Constructor and Object 

class Movie{
    hero: string;
    noOfMovie: number;
    collection: any = Movie;

    constructor(hero:string,noOfMovie:number){
        this.hero = hero;
        this.noOfMovie = noOfMovie;
    }

    showData(){
        console.log(`\n Hero Name : ${this.hero} \n Number Of Movies : ${this.noOfMovie} \n`);
        console.log(this.collection);
    }
}

const ajay = new Movie("Ajay",21);
ajay.showData();

const suresh = new Movie("Suresh",45);
ajay.collection = suresh;
suresh.showData();

