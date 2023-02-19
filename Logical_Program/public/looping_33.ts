// 33 Write a program and to accept any integer number and print the individual number in words.
//     For ex. Input - 546 Output – Six Four Five 


var num:number = 78;
var numCopy:number = num;
var wordNum:string = "";


while(num > 0)
{
    var temp = num % 10;
    
    if(temp == 0)
    {
        wordNum += "Zero ";
    }
    if(temp == 1)
    {
        wordNum += "One ";
    }
    if(temp == 2)
    {
        wordNum += "Two ";
    }
    if(temp == 3)
    {
        wordNum += "Three ";
    }
    if(temp == 4)
    {
        wordNum += "Four ";
    }
    if(temp == 5)
    {
        wordNum += "Five ";
    }
    if(temp == 6)
    {
        wordNum += "Six ";
    }
    if(temp == 7)
    {
        wordNum += "Seven ";
    }
    if(temp == 8)
    {
        wordNum += "Eight ";
    }
    if(temp == 9)
    {
        wordNum += "Nine ";
    }

    num = Math.floor(num / 10);
}

console.log(`${numCopy} :- ${wordNum}`);