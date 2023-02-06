// Inheritance && Polymorphism

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

// const cat = new Cat();
// cat.nameOfBigAnimal;
