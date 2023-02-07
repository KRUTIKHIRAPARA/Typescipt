// Abstract Class && Privations
 
abstract class Laptop{
    
    abstract storgeType():void;
}

abstract class superLaptop extends Laptop{
    // abstract storgeType():void;
}

class lowLaptop extends superLaptop{
    storgeType(){
        console.log('HDD Type Work...');
    }
}

const lp = new lowLaptop();
lp.storgeType();

abstract class Character{
    hundger:number = 0;

    abstract eat():void;
}

class simpleLowChar extends Character{
    eat(): void {
        this.hundger +=1;
    }
}

class hignLavelChar extends Character{
    eat(): void {
        this.hundger +=1;
    }
}

const char = new hignLavelChar();
console.log(char.eat());