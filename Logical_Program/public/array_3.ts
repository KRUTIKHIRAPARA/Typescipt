// 3 Write a program to get the 10 numbers from users & calculate Sum and Average. 

var arr:number[] = [0,1,2,3,4,5,6,7,8,9];
var sum:number = 0;

for(let i=0; i<=arr.length-1; i++)
{
    sum += arr[i];
}

console.log(`Sum : ${sum}, Average : ${sum / arr.length}`);