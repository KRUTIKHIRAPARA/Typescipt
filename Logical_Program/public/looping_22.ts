// 22. Write a Program to Calculate the Series like 1/2 + 2/3 + 3/4 + …+9/10 (Result = 7.071) 


var sum:number = 0;
var temp:number = 1;

for(var i=2; i<=10; i++)
{
    sum += (temp / i);  
    temp = i;
}

console.log(sum);