// Simple Class, Constructor and Object 

class Movie{
    // private hero: string;
    protected noOfMovie: number;
    public collection: any = Movie;

    public constructor(private hero:string,noOfMovie:number){
        // this.hero = hero;
        this.noOfMovie = noOfMovie;
    }

    showData(){
        console.log(`\n Hero Name : ${this.hero} \n Number Of Movies : ${this.noOfMovie} \n`);
        console.log(this.collection);
    }
}

class newMovies extends Movie{
    oldMovies = super.noOfMovie;
    
}

const ajay = new Movie("Ajay",21);
ajay.showData();

const suresh = new Movie("Suresh",45);
ajay.collection = suresh;
suresh.showData();

