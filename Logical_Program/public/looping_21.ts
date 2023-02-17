// 21. Write a Program to Calculate the sum of first 50 odd numbers. ( Result = 625 ) 

var incr:number = 0;
var sum:number = 0;
var count:number = 0;

while(incr <= 50)
{
    if(incr % 2 == 1)
    {
        sum = sum + incr;
        count++;

        if(count == 50)
            break;
    }
    incr++;
}

console.log(sum);