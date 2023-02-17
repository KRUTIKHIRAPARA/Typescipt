// 18. Write a program following series.
//     2 3 5 9 17 33 65 …….n 


var num:number = 6;
var add:number = 2;
var incre:number = 1;

for(let i=0; i<=num; i++)
{
    add = add + incre;
    incre = incre * 2;
    console.log(add);
}