// 23. Write a program to read any integer number and print it in reverse. 


export{};

var num:number = 3455;

//---------First Way

var result:number = 0;

while(num > 0)
{
    var temp = num % 10;
    result = result * 10  + temp;
    num = Math.floor(num/10);
}

console.log(result);


//---------Second Way


// var temp:any = num.toString();
// var reverseNum:number=0;


// for(let i=temp.length-1; i>=0; i--)
// {
//     reverseNum += temp[i];
//     console.log(reverseNum);
// }
    
// console.log(reverseNum);
    
    

//---------Third Way
    
    
// function reverse_number(n:any)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_number(3455)));

