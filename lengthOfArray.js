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

function getLengthOfMissingArray(arrayOfArrays) {
    let result = 0
  
    if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0

    arrayOfArrays = arrayOfArrays.filter(element => 
      {return element !== null})
  
    arrayOfArrays = arrayOfArrays.sort((a, b) => b.length - a.length)
    console.log(arrayOfArrays)

    for (let i = 0; i < arrayOfArrays.length-1; i++) {

        if (arrayOfArrays[i].length === 0 || arrayOfArrays[i] === null) return 0
    
        else if (arrayOfArrays[i].length - arrayOfArrays[i + 1].length !== 1) {
          console.log(arrayOfArrays[i].length)
          console.log(arrayOfArrays[i + 1].length)
    
          result = arrayOfArrays[i].length - 1
        }
      }
      return result
}  


