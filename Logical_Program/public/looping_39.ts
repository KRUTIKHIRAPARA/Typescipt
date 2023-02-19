// 39 Display the following series :
//     1 2 2 4 8 32 256……..up to a given range. 


var num:number = 7;
var n1 = 1;
var n2 = 2;
var nextNum;

for(let i=0;i<=num; i++)
{
    console.log(n1);
    nextNum = n1 * n2;
    n1 = n2;
    n2 = nextNum;
}