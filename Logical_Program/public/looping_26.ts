/*
26/ Write a Program to find out whether a given no. is an Armstrong no. or not.
    (Hint : 1*3 + 5*3 + 3*3 = 153, is an Armstrong no.
 */


var num:number = 1634;
var numCopy:number = num;
var sum:number = 0;
var numLength =  num.toString().length;

while(numCopy > 0)
{
    var temp = numCopy % 10;
    sum += temp**numLength;
    numCopy = Math.floor(numCopy/10);
}

if(sum == num)
{
    console.log(`${num} Is Armstrong Number...`);
}
else 
{
    console.log(`${num} Is Not A Armstrong Number...`);
}
