// 9. Write a Program to input marks of 3 subjects and calculate total, percentage, result and grade. 


var subject1:number = 78;
var subject2:number = 67;
var subject3:number = 89;

var sub_total = subject1 + subject2 + subject3; 

var percentage = (sub_total * 100) / 300;

if(percentage >= 90 && percentage <= 100)
{
    console.log(`Percentage ${percentage}% , Result : Pass, Grade : A`);
}   
else if(percentage >= 80 && percentage < 90)
{
    console.log(`Percentage ${percentage}% , Result : Pass, Grade : B`);
}
else if(percentage >= 60 && percentage < 80)
{
    console.log(`Percentage ${percentage}% , Result : Pass, Grade : C`);
}
else if(percentage >= 33 && percentage < 60)
{
    console.log(`Percentage ${percentage}% , Result : Pass, Grade : D`);
}
else
{
    console.log(`Percentage ${percentage}% , Result : Fail, Grade : E`);
}

