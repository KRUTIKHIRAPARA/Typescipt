// Polymorphism && OverRidding

class Hero{

    name:string = 'Hero Class';

    attack(){
        console.log(`Hero Attack`);
    }

    move(){
        console.log(`Hero Moveing....`);
    }
}

class BGMI extends Hero{
    
    name: string='BGMI Class';
    
    attack(): void {
        super.attack();
        console.log(`BGMI Player Atteck...`);
        
        console.log(this.name);
    }
}

const bgmi:Hero = new BGMI();
const bgmis:BGMI = new BGMI();
// bgmi.attack();
bgmis.attack();


// ------------------Method Overloading

class Regestration 
{  
    user(un: string): string;  
    user(ur: number): string; 
    user(un:string, ur:number, village:string):void;

    user(...arg: any): any   
    {  
        if (typeof(arg[0]) === 'string')  
            console.log(`User Name Is : ${arg[0]}`); 
            
        if (typeof(arg[0]) === 'number')  
            console.log(`User Roll No Is : ${arg[0]}`); 
            
        if(typeof(arg[0]) === 'string' && typeof(arg[1]) === 'number' && typeof(arg[2]) === 'string')
            console.log(`Name is : ${arg[0]} \n Roll No Is : ${arg[1]} \n Village IS : ${arg[2]}`); 
        
    }  
}  
var reg = new Regestration();  

// reg.user(23);
// reg.user("Dhruv");
reg.user("Dhruv Hirapara",13,"Monpari");
