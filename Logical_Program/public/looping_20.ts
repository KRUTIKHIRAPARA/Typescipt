// 20. Write a Program to Calculate and print the sum of prime numbers between 1 to 25. (Result = 101) 


var sum:number = 0;

for (var counter = 1; counter <= 25; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        // console.log(counter);
        sum = sum+counter;
    }
}

console.log(sum);