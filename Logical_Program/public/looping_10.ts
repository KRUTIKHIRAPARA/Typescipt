// 10. 1, 1, 2, 3, 5, 8, 13, 21.…………………………n 


function serice(n:number):number
{
    if(n <= 1)
        return 1;
    return serice(n-1)+serice(n-2);

}

console.log(serice(5));
