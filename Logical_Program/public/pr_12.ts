// 12. Write a program to get an alphabet from the user and display message UPPERCASE if it is uppercase alphabet or LOWERCASE if it is lowercase alphabet. 

export{};

var name:string = "krutik";

// console.log(name.charAt(0).toLowerCase());

if(name == name.toUpperCase())
{
    console.log(`${name} Is UpperCase..`);
}
else if(name == name.toLowerCase())
{
    console.log(`${name} Is LowerCase..`);
}
else
{
    console.log("Unvalide Input");
}