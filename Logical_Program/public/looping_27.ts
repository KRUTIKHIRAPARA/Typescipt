// 27. Write a program to find out Factorial of a given number. (e.g. 5! = 120) 


var num:number = 5;
var sum:number = 1;

for(let i=1; i<=num; i++)
{
    sum *= i;
}

console.log(sum);
