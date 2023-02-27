


// ARRAY TRAVERSING & ACCESS
    // var data = [34,6,89,65,4,23,7,1,45];

    // for(let i=0; i<data.length; i++)
    // {
    //     console.log(data[i]);
    // }



// INSERT ELEMENT FIXED POSITION

// First Way------

    // var data = [34,6,89,65,4,23,7,1,45];

    // var newElement = 55;
    // var position = 5;

    // for(let j=data.length-1; j>=0;j--)
    // {
    //     if(j >= position)
    //     {
    //         data[j+1] = data[j];

    //         if(j == position)
    //         {
    //             data[j] = newElement;
    //         }
    //     }
    // }

    // console.log(data);


// Second Way-----

    // data.splice(2,0,4444);
    // console.log(data);



// DELETE ELEMENT FIXED POSITION

    // var data = [34,6,89,65,4,23,7,1,45];

    // var delPostion = 3;

    // for(let k=delPostion; k < data.length-1; k++)
    // {
    //     data[k] = data[k+1];
    // }

    // data.length = data.length -1;

    // console.log(data);