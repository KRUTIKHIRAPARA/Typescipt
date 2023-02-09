// Inheritance

// ----------Simple && Multileval Inheritance

class Animal{

    // protected nameOfBigAnimal:string = "Elephant";
    // private nameOfBigAnimal:string = "Elephant";
    nameOfBigAnimal:string = "Elephant";

    animalVoice(){
        console.log("By Defult Voice...");
    }

    move(){
        console.log(`Animal Move`);
    }
}

class Dog extends Animal{

    animalVoice(): void {
        console.log(`Dog Voice... ${this.nameOfBigAnimal}`);
    }

    move(){
        super.move();
        console.log(`Dog Move...`);
    }
}

class Cat extends Dog {}

const dog = new Dog();
dog.animalVoice();
dog.move();

const cat = new Cat();
cat.nameOfBigAnimal;


// ----------Multileval Inheritance


class Bike{
    
    Company!:string;

    constructor(company:string){
        this.Company = company;
    }
}

class TVS extends Bike{

    Price!:number;

    constructor(company:string,price:number){
        super(company);
        this.Price = price;

        // console.log(`Company Name : ${this.Company} \n Price : ${this.Price}`);
    }
    
}

class Honda extends TVS{
    
    Speed!:number;
    
    constructor(company:string,price:number,speed:number){
        super(company,price);
        this.Speed = speed;
        
        console.log(`Company Name : ${company} \n Price : ${price} \n Speed : ${this.Speed}`);
    }

}

// var tvs = new TVS("TVS",67000);
var honda = new Honda("HONDA",67000,120);



//--------------- NOTE ------------------------

// There Three Types Of Inheritance Not Supported In Typescript
//------------- Multiple Inheritance
//------------- Hierarchical Inheritance
//------------- Hybrid nheritance




