/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

// Let's use modulo (remainder) % operator

// It returns the remainder left over when one number is divided by another.

// We first create a variable sum variable that will have the total numbers

let sum = 0

/* Lets use the modulo operator to iterate through all the numbers and get only the 
ones completely divisible by 3 or 5 */

for(var i = 0; i < number; i++ ) {
    if (i % 3 === 0 || i % 5 === 0) {

        sum += i

    }
}


// we finally return the sum of all numbers that match the condition

return (sum)