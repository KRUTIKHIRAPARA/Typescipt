// 28. 1! + 2! + 3! + 4! + 5!..…………………………n 


var num:number = 5;
var mul:number = 1;
var sum:number = 0;

for(let i=1; i<=num; i++)
{
    mul *= i;
    sum += i;
}

console.log(sum+mul);