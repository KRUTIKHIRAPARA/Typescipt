// 8. Write a program that will read three numeric values from the user and find out and display the larger one. 
//     (a) Using if…else if…else (b) Using Nested Ternary 



// --------(a) Using if....else  if...else


var num:number = 45;
var num2:number = 567;
var num3:number = 65;

if(num > num2)
{
    console.log(`${num} Is Large Number`);
}
else if(num > num3)
{
    console.log(`${num} Is Large Number`);
}
else if(num2 > num3)
{
    console.log(`${num2} Is Large Number`);
}
else
{
    console.log(`${num3} Is Large Number`);
}



// --------(b) Using Nested Ternary


var n:number = 999;
var n2:number = 84578578;
var n3:number = 9999;

(n < n2) ? console.log(`${n2} Is 1 Large Number`) : (n > n3) ? console.log(`${n} Is 2 Large Number`) : (n2 > n3) ? console.log(`${n2} Is 3 Large Number`) : console.log(`${n3} Is 4 Large Number`); 
