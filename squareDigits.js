/* In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */


function squareDigits(num){
    /* When you try to concantenate two numbers, you end up adding them instead.
       So, we first turn the number into a str. It also lets us split
       the number into separate digits. */
       
       let ourStr = num + ''
       
    /* We then create another variable that will contain our number after 
       concantanating the squared digits. */
       
       let total = ''
       
    //  We then loop thru ourStr
    
        for(let i in ourStr) {
        /* We first turn each digit into an integer using parserInt().
           We then square it, turn it back into a str by concatenating 
           it to an empty str and we then we wrap the statement in parenthesis.
           This tells Js that we want to concantenate the squared digit to total. */
          
        total += (parseInt(ourStr[i])**2 + '')  
  
        
        }
      /* After looping through all the digits of our number we turn total back
         into an integer and finally reurn it. */
       
       
    return parseInt(total);
  }