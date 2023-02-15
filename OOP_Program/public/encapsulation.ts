// Encapsulation && Private && Protacted

class Student{
    private name!:string;
    private roll!:number;

    setName(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setRoll(roll:number){
        this.roll = roll;
    }

    getRoll(){
        return this.roll;
    }
}

const st1 = new Student();
st1.setName("Jemin");
st1.setRoll(23);

console.log(`\n Student Name : ${st1.getName} \n Student Roll No : ${st1.getRoll}`);