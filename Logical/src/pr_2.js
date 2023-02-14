"use strict";
// 2. Write a Program to accept any number and check whether it is positive or negative 
//     (a) Using if…else (b) Using Multiple if (c) Using Ternary Operator 
// --------(a) Using if...else
var num = -8;
if (num >= 0) {
    console.log(`${num} Is Positive Number....`);
}
else if (num < 0) {
    console.log(`${num} Is Negative Number !!!`);
}
// --------(b) Using Multiple if
var num2 = -0;
if (num2 >= 0) {
    console.log(`${num2} Is Positive Number....`);
}
if (num2 < 0) {
    console.log(`${num2} Is Negative Number !!!`);
}
// --------(c) Using Ternary Operator
var num3 = -5;
num3 >= 0 ? console.log(`${num3} Is Positive Number....`) : console.log(`${num3} Is Negative Number !!!`);
;
