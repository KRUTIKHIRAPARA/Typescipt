// 10. Write a program to accept any day number between 1 to 7 and print the message as Monday if day number is 1, Tuesday if day number is 2, Wednesday if day number is 3 and so on. Also display appropriate message if the day number is less than 1 or greater than 7.

var day:number = -9;
// var day:number = 6;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
        
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");     
        break;  
        
    default:
        console.log("Out Of Days Number");
        break;
}
