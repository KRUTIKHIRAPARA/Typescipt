// 34 Write a program and to accept any integer number and print the individual number in words.
//     For ex. Input - 546 Output – Five Four Six 


var num:number = 546;
var numCopy:number = num;
var wordNum:string = "";
var numArray:number[] = [];

while(num > 0)
{
    var temp = num % 10;
    numArray.push(temp);
    num = Math.floor(num / 10);
}

for(let i=numArray.length; i>=0; i--)
{
    if(numArray[i] == 0)
    {
        wordNum += "Zero ";
    }
    if(numArray[i] == 1)
    {
        wordNum += "One ";
    }
    if(numArray[i] == 2)
    {
        wordNum += "Two ";
    }
    if(numArray[i] == 3)
    {
        wordNum += "Three ";
    }
    if(numArray[i] == 4)
    {
        wordNum += "Four ";
    }
    if(numArray[i] == 5)
    {
        wordNum += "Five ";
    }
    if(numArray[i] == 6)
    {
        wordNum += "Six ";
    }
    if(numArray[i] == 7)
    {
        wordNum += "Seven ";
    }
    if(numArray[i] == 8)
    {
        wordNum += "Eight ";
    }
    if(numArray[i] == 9)
    {
        wordNum += "Nine ";
    }
}

console.log(`${numCopy} :- ${wordNum}`);