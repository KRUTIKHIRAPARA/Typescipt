/*
15. Write a Program for the following:
To calculate the gross salary based on the name of employee, his/her basic salary and sex entered through keyboard, consider the following rules.

    Basic Salary  Upto 4000  Beyond 4000     Beyond 8000     Beyond 12000
                             but upto 8000   but upto 12000
    DA (% of Basic) 14 %       12 %             10 %              8 %
    HRA             200        500            10 % of Basic     15 % of Basic
    Medical        
        Male        150        250              500             2000  
        Female      200        350              700             1200
    
    Gross Salary = Basic Salary + DA + HRA + Medical 

*/

var salary:number = 4500;
var sex:string = "female".toLowerCase();
var da:number = 0;
var hra:number = 0;
var medical:number = 0;

if(salary > 0 && salary <= 4000)
{
    da += (salary * 14) / 100;
    hra += 200;

    if(sex == "male")
    {
        medical += 150;
    }
    else if(sex == 'female')
    {
        medical += 200;
    }
}
else if(salary > 4000 && salary <= 8000)
{
    da += (salary * 12) / 100;
    hra += 500;
    
    if(sex == "male")
    {
        medical += 250;
    }
    else if(sex == 'female')
    {
        medical += 350;
    }
}
else if(salary > 8000 && salary <= 12000)
{
    da += (salary * 10) / 100;
    hra += (salary * 10) / 100;
    if(sex == "male")
    {
        medical += 500;
    }
    else if(sex == 'female')
    {
        medical += 700;
    }
}
else if(salary > 12000)
{
    da += (salary * 8) / 100;
    hra += (salary * 15) / 100;
    if(sex == "male")
    {
        medical += 2000;
    }
    else if(sex == 'female')
    {
        medical += 1200;
    }
}

var gross_salary =  salary + da + hra + medical;

console.log(gross_salary);