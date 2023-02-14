"use strict";
/*
6. Write a program, which reads two integer values. If the first is less than the second, print the message UP.
If second is less than first, print the message DOWN If the numbers are equal, print the message EQUAL.
    (a) Using if…else (b) Using Nested Ternary
*/
// --------(a) Using if....else
var num1 = -6;
var num2 = 78;
if (num1 > num2) {
    console.log(`UP`);
}
else if (num1 < num2) {
    console.log(`DOWN`);
}
else {
    console.log(`Equal`);
}
// --------(b) Using Nested Ternary
var n1 = 995;
var n2 = 56;
(n1 > n2) ? console.log("UP") : (n1 < n2) ? console.log("DOWN") : console.log("Equal");
