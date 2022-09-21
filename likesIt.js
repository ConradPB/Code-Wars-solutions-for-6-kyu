/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases. */

function likes(names) {
/*   Let's use the switch statement and return the 
     requested string for each case
     This initializes the function. Ensures names exists
     or we get an empty array  */

    names = names || []
    switch(names.length) {
        case 0:
        return 'no one likes this'
      
       
    // Next, we use sting interpolation for the rest of the cases
        case 1:
        return `${names [0]} likes this`
        
        
        case 2: 
        return `${names [0]} and ${names [1]} like this`
        
        case 3:
        return `${names [0]}, ${names [1]} and ${names [2]} like this`
        
/*  The default case will be used for any instance where we have 4 or more names.
     names.length -2 is used to display how many names are left */
        
        default: 
        return `${names [0]}, ${names [1]} and ${names.length - 2} others like this`
        
    }
    
  }