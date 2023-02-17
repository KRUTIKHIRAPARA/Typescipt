// 17. Write a Program to Calculate a Series like 1/1! + 2/2! +. …. + 10/10! 


function cSeries(num:number){
    var add:number = 0;
    for(let i=1; i<=num; i++)
    {
        add += (i/i!);
    }
    console.log(add);
}


cSeries(10);