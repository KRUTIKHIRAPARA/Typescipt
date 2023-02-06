// Polymorphism && OverRidding

class Hero{
    attack(){
        console.log(`Hero Attack`);
    }

    move(){
        console.log(`Hero Moveing....`);
    }
}

class BGMI extends Hero{
    attack(): void {
        super.attack();
        console.log(`BGMI Player Atteck...`);
    }
}

const bgmi:Hero = new BGMI();
const bgmis:BGMI = new BGMI();
bgmi.attack();
bgmis.attack();