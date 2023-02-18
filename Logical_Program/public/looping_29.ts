/*
29. Write a Program to generate following series:

    1   2   3   4
    - + - + - + - +.....(10 Terms)
    2!  3!  4!  5! 

*/


var num:number = 10;
var sum:number = 0;
var temp:number = 1;

for(let i=2; i<=num; i++)
{
    sum += (temp / i);
    temp = i;
}

console.log(sum);