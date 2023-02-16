/*
16. An electric power distribution company charges its domestic consumers as follow:
            Consumption Units               Rate of Charge
                0 - 200                 Rs. 0.40 per unit
                201 - 400               Rs. 0.60 per unit + Rs. 100
                401 - 600               Rs. 0.80 per unit + Rs. 250
                601 & above             Rs. 1.00 per unit + Rs. 400 
*/

var company_unit:number = 56;

var total_charge:number = 0;

if(company_unit > 0 && company_unit <= 200)
{
    total_charge += company_unit * 0.40;
}
else if(company_unit > 200 && company_unit <= 400)
{
    total_charge += ( company_unit * 0.60 ) + 100;
}
else if(company_unit > 400 && company_unit <= 600)
{
    total_charge += ( company_unit * 0.80 ) + 250;
}
else if(company_unit > 600)
{
    total_charge += ( company_unit * 1 ) + 400;
}

console.log(`Unit Use : ${company_unit}, Total Charge : ${ total_charge}`);