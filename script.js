// Write a short program that prints each number from 1 to 20 on a new line
// For each multiple of 3, print "Fizz" instead of the new number
// For each multiple of 5, print "Buzz" instead of the new number
// For numbers which are multiples of 3 and 5, print "FizzBuzz" instead of the number


// Write a FOR LOOP that iterates over 1 to 20
// Set the counter to 1
// Break when the counter reaches 20
// Increment counter by 1
    // IF number MOD 15 == 0
        // print "FizzBuzz"
    // ELSE IF number MOD 3 == 0
        // print "Fizz"
    // ELSE IF number MOD 5 == 0
        // print "Buzz"
    // ELSE
        // print i


for (i = 1; i <= 20; i++) {
    if(i % 15 == 0) {
        console.log("FizzBuzz")
    } else if(i % 3 == 0) {
        console.log("Fizz")
    } else if(i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}