// 11. Write a Program to accept two numbers and any arithmetic operator. According to arithmetic operator calculate the result and display it.


var num:number = 45;
var num2:number = 56;
var operator:string = "+";

switch(operator){
    case "+":
        console.log(`Ans : ${num + num2}`);
        break;
        
    case "-":
        console.log(`Ans : ${num - num2}`);
        break;

    case "*":
        console.log(`Ans : ${num * num2}`);
        break;

    case "/":
        console.log(`Ans : ${num / num2}`);
        break;

    case "%":
        console.log(`Ans : ${num % num2}`);
        break;

    default:
        console.log('This sign not available');
        break;
}

