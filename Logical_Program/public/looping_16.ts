// 16. Write a Program to Calculate the Series like 1-2+3-4…. –10 (Result = -5) 



function calSeries(num:number){
    if(num % 2 == 0)
    {
        return (-(num/2));
    }
    else
    {
        return ((num+1)/2);
    }
}

console.log(calSeries(11));