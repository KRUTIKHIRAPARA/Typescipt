"use strict";
// 4. Write a Program to accept any year in four digits and check whether it is Leap Year or not.
//     (a) Using if…else (b) Using Multiple if (c) Using Ternary Operator
// --------(a) Using if...else
var year = 2024;
if (year % 4 == 0) {
    console.log(`${year} Is Leep Year`);
}
else {
    console.log(`${year} Is Not Leep Year`);
}
// --------(b) Using Multiple if
var year2 = 2007;
if (year2 % 4 == 0) {
    console.log(`${year2} Is Leep Year`);
}
if (year2 % 4 != 0) {
    console.log(`${year2} Is Not Leep Year`);
}
// --------(c) Using Ternary Operator
var year3 = 2008;
year3 % 4 == 0 ? console.log(`${year3} Is Leep Year`) : console.log(`${year3} Is Not Leep Year`);
