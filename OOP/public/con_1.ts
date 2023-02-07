// Using the non-null assertion operator instead

// If you don't want to provide initial values for the fields and want to get rid of the error, you can use the non-null assertion operator (!).

// The non-null assertion operator (!) removes null and undefined from a type without doing any explicit type checking.

// We effectively tell TypeScript that the class properties are of the specified type and aren't null or undefined.


class Player{
    name!:string;
    health!:number;
    cursh!:Player;
    
}

const mario = new Player();
mario.name = "Mario";
mario.health = 10;

const peach = new Player();
peach.name = "Peach";
peach.health = 34;

mario.cursh = peach;
console.log(mario.cursh.name);