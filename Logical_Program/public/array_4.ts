// 4 Write a program to get the 10 numbers from users & Find Max and Min Number. 


var arr:number[] = [34,1,5,87,7,-5,867,8,67,6,3,4];
var max:number = arr[0];
var min:number = arr[0];

for(let i=0; i<=arr.length-1; i++)
{
    if(arr[i] > max)
    { 
        max = arr[i]; 
    }

    if(arr[i] < min)
    { 
        min = arr[i]; 
    }
}

console.log(`Max Value : ${max}, Min Value : ${min}`);