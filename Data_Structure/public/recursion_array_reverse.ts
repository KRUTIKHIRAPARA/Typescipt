// RECURSION ARRAY WITH REVERSE

export{};

var data = [45,6,7,3,2,4,454,67,8];

var temp;

function rever(data:any,start:number,end:number)
{
    if(start <= end)
    {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        rever(data,start+1,end-1);
    }
}

rever(data,0,data.length-1);

console.log(data);


// OTHER WAY

// data.reverse();