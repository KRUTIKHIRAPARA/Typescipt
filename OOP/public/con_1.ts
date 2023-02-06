class Player{
    name:string;
    health:number;
    cursh:Player;
    
}

const mario = new Player();
mario.name = "Mario";
mario.health = 10;

const peach = new Player();
peach.name = "Peach";
peach.health = 34;

mario.cursh = peach;
console.log(mario.cursh.name);