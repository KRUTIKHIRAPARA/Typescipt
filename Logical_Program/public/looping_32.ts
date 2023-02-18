// 32. Write a Program to print out all Armstrong numbers between 1 to 500. 


var numLoop:number = 500;

while(numLoop > 0)
{
    var num:number = numLoop;
    var numCopy:number = num;
    var sum:number = 0;
    var numLength = num.toString().length;

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
    numLoop--;
}