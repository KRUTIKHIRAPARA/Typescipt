// 19. Write a program to print first 10 numbers of fibonacci series, which are prime numbers. 


var t1:number = 0;
var t2:number = 1;

var nextVal:number=0;

for(let i = 1; i <= 10; i++)
{
    if(nextVal % 2 == 1)
    {
        console.log(nextVal);
    }

    t1 = t2;
    t2 = nextVal;
    nextVal = t1+t2;
}