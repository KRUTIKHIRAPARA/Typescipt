// 35. Write a program that accept an integer number and determine whether the inputted number is palindrome or not?


var num:number = 16461;
var numCopy:number = num;
var storeNum:string = "";

while(num > 0)
{
    var temp = num % 10;
    storeNum += temp;
    num = Math.floor(num / 10);
}

if(numCopy.toString() == storeNum)
{
    console.log(`${numCopy} Is Palindrome Number`);
}
else
{
    console.log(`${numCopy} Is Not A Palindrome Number`);
}
