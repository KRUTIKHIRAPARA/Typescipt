// 40 Write a program to take an integer and find the sum of first and last digit.
//     Ex. Input: 1234
//     Output: 5


function digitSum(n:number){
    let nCopy:number = n;
    let len = n.toString().length;
    var numArray:number[] = [];

    while(n > 0)
    {
        var temp = n % 10;
        numArray.push(temp);
        n = Math.floor(n / 10);
    }

    console.log(`Full Number : ${nCopy} \nSum : ${numArray[numArray.length-1]} + ${numArray[0]} = ${numArray[numArray.length-1] + numArray[0]}`);
}

digitSum(1234);