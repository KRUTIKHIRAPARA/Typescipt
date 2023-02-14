"use strict";
/* 7. Write a Program to get any number from the console and check whether it is positive, negative or zero.
     (a) Using if…else if…else  (b) Using Nested Ternary

NOTE :

    Please Install in typescript
        Command - npm install prompt-sync
                  
               - const prompt=require("prompt-sync")({sigint:true});

    Other wise not support console in prompt : error - prompt is not defined!!!!

*/
// --------(a) Using if....else
const prompt = require("prompt-sync")({ sigint: true });
const whetherNumber = prompt("Enter Any Whether Number : ");
console.log(typeof parseInt(whetherNumber));
