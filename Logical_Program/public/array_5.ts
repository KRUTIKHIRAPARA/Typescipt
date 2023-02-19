// 5. Write a program to get 10 students marks from user and sort it in Ascending and Descending order. 



function sortMarks(arr:number[]){
    var i = 0;
    var j;

    while(i < arr.length)
    {
        j = i + 1;
        while(j < arr.length)
        {
            if (arr[j] < arr[i]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
        i++;
    }

    return arr;
}

var arr:number[] = [45,67,5,6,78,9];
console.log( sortMarks(arr));