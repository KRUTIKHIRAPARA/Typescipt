// 36. Write a program to do the addition of the first n terms of the fibonacci series. 


var num:number = 6;

var n1 = 0;
var n2 = 1;
var nextNum;

for(let i=1; i<=num; i++)
{
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}