// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

//If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
// First, we create a variable array1 that the function will reuturn 
// and we set it to an empty array that will contain all values present in a but not in b
  let array1 = []
  
  // We create an if statement that checks to see whether the array length of 
  // either a or b is zero and returns a as it is if the length is zero. 
  if (a.length === [] || b.length === []) {
    return a
// In the else block we iterate thru through the array using the filter method and
// filter out all values that exist in b.   
    } else {
    array1 = a.filter(num => !(b.includes(num)))
    return array1      
  }
  
  
}