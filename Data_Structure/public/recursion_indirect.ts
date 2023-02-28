// INDIRECT RECURSION

var money = 100;
var totalBall = 0;

function buyBall(m:number)
{
    if(m > 0)
    {
        console.log(`I have ${m} RS ${totalBall}`);
        buyMore(m);
    }
    else
    {
        console.log(`I don't have more money!!! , I have Buy Total " ${totalBall} " Balls`);
    }
}

function buyMore(m:number){
    totalBall++;
    buyBall(m - 20);
}

buyBall(money);