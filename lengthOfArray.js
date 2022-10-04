/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

function getLengthOfMissingArray(arr) {
    let result = 0;
  
    if (arr === null || arr.length === 0) return 0
  
    arr = arr.sort((a, b) => b.length - a.length)
    console.log(arr)

    for (let i = 0; i < arr.length-1; i++) {

        if (arr[i].length === 0 || arr[i] === null) return 0
    
        else if (arr[i].length - arr[i + 1].length !== 1) {
          console.log(arr[i].length)
          console.log(arr[i + 1].length)
    
          result = arr[i].length - 1
        }
      }
      return result
}  