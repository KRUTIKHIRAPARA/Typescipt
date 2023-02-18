// 24. Write a program to read any number and print the sum of all values.
//     For ex. Input - 3564 Output - 3+5+6+4 = 18 


var num:number = 3564;
var sum:number = 0;

while(num > 0)
{
    var temp = num % 10;
    sum += temp;
    num = Math.floor(num/10);
}

console.log(sum);