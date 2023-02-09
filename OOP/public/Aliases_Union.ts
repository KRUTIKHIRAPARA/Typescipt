
//----------- Aliases : You are define advanced type of any data member
type addressName = string;
type addressCity = string;
type addressPinCode = number;

type Address = {
    name:addressName;
    city:addressCity;
    pincode:addressPinCode;
}


var address : Address = {
    name:"Krutik Hirapara",
    city:"Moti Monpari",
    pincode: 362130
}


//------------- Union : You are decaler One To Many Data Type in any data member

var carNumber : string | number;

function simple(val:string | number ):void{
    console.log(`${val}`);
}

simple("krutik2511@gmail.com");