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



// ARRAY SEARCH ELEMENT

    // var data = [34,6,89,65,4,23,65,7,1,45];
    // var searchEle = 65;
    // var index = []

    // for(let i=0; i<data.length; i++)
    // {
    //     if(data[i] == searchEle)
    //     {
    //         index.push(i);
    //     }
    // }

    //  console.log(`${searchEle} Is Availble In Index OF ${index}`);



// MERGE TWO ARRAY


// FIRST WAY------

    // var data = [34,6,89,65,4,23,65,7,1,45];
    // var data2 = [76,8,94,2];

    // let data3 = [];

    // for(let i=0;i<data.length;i++){
    //     data3[i] = data[i];
    // }

    // for(let j=0;j<data2.length;j++)
    // {
    //     data3[data.length+j] = data2[j];
    // }

    // console.log(data3);


// SECOND WAY------

    // let data3 = [...data,...data2];
    // console.log(data3);




// MERGE TWO ARRAY (WHILE ARRAY)


    // var data = [3,7,9,45,76,87];
    // var data2 = [6,8,67,77,98,99];
    // var data3 = [];
    // var d1 =0;
    // var d2 =0;
    // var d3 =0;

    // while(d1 < data.length || d2 < data2.length)
    // {
    //     if(data[d1] < data2[d2])
    //     {
    //         data3[d3] = data[d1];
    //         d1++;
    //     }
    //     else
    //     {
    //         data3[d3] = data2[d2];
    //         d2++;
    //     }
    //     d3++;
    // }

    // console.log(data3);




