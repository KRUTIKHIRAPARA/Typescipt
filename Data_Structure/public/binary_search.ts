// BINARY SEARCH WITH ITERATIVE APPROACH

    export{};
    var data :number[] =[5,56,7,89,45,33,76];
    var findEle = 56;
    var startEle = 0;
    var endEle = data.length-1;
    var position = undefined;

    while(startEle <= endEle)
    {
        var mid = Math.floor((startEle+endEle)/2);

        if(data[mid] == findEle)
        {
            position = mid;
        }
        else if(data[mid] < findEle){
            startEle = mid + 1; 
        }
        else {
            endEle = mid - 1;
        }
    }
    console.log(position);
