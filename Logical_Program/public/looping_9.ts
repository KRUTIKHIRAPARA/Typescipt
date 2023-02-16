// 9. 1+4+9+16+25+36....……………………………n 


var num:number = 3;
var count:number = 0;

for(let i=1; i<=num; i++)
{
    count += i * i;
}

console.log(count);