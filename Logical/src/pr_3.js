"use strict";
/*3. Write a program to read any number and determine whether a number is “ODD” or “EVEN” and print   the message NUMBER IS ODD or NUMBER IS EVEN.
    (a) Using if…else (b) Using Multiple if (c) Using Ternary Operator
*/
// --------(a) Using if...else
var num = 3;
if (num % 2 == 0) {
    console.log(`${num} Is Number EVEN...`);
}
else {
    console.log(`${num} Is Number ODD...`);
}
// --------(b) Using Multiple if
var num2 = 88;
if (num2 % 2 == 0) {
    console.log(`${num2} Is Number EVEN...`);
}
if (num2 % 2 != 0) {
    console.log(`${num2} Is Number ODD...`);
}
// --------(c) Using Ternary Operator
var num3 = 17;
num3 % 2 == 0 ? console.log(`${num3} Is Number EVEN...`) : console.log(`${num3} Is Number ODD...`);
