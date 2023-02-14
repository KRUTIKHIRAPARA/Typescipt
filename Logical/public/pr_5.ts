// 5. Write a Program to get two numbers from keyboard and print the maximum number among them.
//     (a) Using if…else (b)  Using Ternary Operator



// --------(a) Using if...else

var num1:number = 98;
var num2:number = 56;

if(num1 > num2)
{
    console.log(`Big Number Is : ${num1}, Small Number Is : ${num2}`);
}
else if(num1 < num2)
{
    console.log(`Big Number Is : ${num2}, Small Number Is : ${num1}`);
}
else
{
    console.log(`${num1} & ${num2} Both Are Equals Number`);
}



// --------(b) Using Ternary Operator

var n1:number = -9;
var n2:number = 67;

(n1 > n2) ? console.log(`Big Number Is : ${n1}, Small Number Is : ${n2}`) :(n1 < n2) ? console.log(`Big Number Is : ${n2}, Small Number Is : ${n1}`) : console.log(`${n1} & ${n2} Both Are Equals Number`);
