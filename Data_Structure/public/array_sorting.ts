// ARRAY SORTING

let data = [40,56,7,34,9];

for(let i=0; i< data.length; i++)
{
    for(let j=0; j<data.length; j++)
    {
        if(data[j] > data[j+1])
        {
             var temp = data[j];
             data[j] = data[j+1];
             data[j+1] = temp;
        }
    }
}

console.log(data);