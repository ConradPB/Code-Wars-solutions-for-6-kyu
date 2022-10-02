/* 
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
*/

function partsSums(ls) {
    // First, let's declare a variable set to an array with 0 in it
    let result = [0]

    // We use a for loop to iterate through the ls array in reverse
    for(const n in ls.reverse()) {

        /* In every iteration, we push the result of the sum of the n element of ls and the n element of the result array
         to the result array */
        result.push(ls[n] + result[n])
    }
    // Finally, return the reversed result array 

    return result.reverse()

}