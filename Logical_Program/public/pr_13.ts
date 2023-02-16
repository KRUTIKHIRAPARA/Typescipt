// 13. Write a program that reads a character from keyboard and then prints it in reverse case. 

var reverseData:string = "Jaimin";

var splitData = reverseData.split("");

var conditionData:string = "";

for(var i=splitData.length - 1; i >=0 ;i--)
{
    conditionData += splitData[i];
    // console.log(splitData[i]);
    
}

console.log(conditionData);