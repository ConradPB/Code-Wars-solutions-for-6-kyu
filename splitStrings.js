/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){

    // lets create an array of the string and an array to save the result

   let arr = str.split('')
   let result = []
   /* Create a for loop to iterate through the array.
      In every iteration, add two to the value of "i", so it iterates every two elements
      */

   for(let i = 0; i<arr.length; i+=2){
      if(arr[i+1]) res.push(arr[i]+arr[i+1])
      else
      res.push(arr[i]+'_')

   }
// return the result array
   return res
}