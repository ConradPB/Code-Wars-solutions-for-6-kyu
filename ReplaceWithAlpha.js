/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    if (typeof text !== "string") 
    return "wrong entry"
    // Lower the letter case
    text = text.toLowerCase()
    // set result to an empty string
    let result = ''

    // lets define the alphabets object
    const alphabets = {
        A: "1 ",
        B: "2 ",
        C: "3 ",
        D: "4 ",
        E: "5 ",
        F: "6 ",
        G: "7 ",
        H: "8 ",
        I: "9 ",
        J: "10 ",
        K: "11 ",
        L: "12 ",
        M: "13 ",
        N: "14 ",
        O: "15 ",
        P: "16 ",
        Q: "17 ",
        R: "18 ",
        S: "19 ",
        T: "20 ",
        U: "21 ",
        V: "22 ",
        W: "23 ",
        X: "24 ",
        Y: "25 ",
        Z: "26 ",
      };
      for (let i = 0; i < text.length; ++i) {
        for (const letter in alphabets) {
      if (text.charAt(i) === letter) {
        result += alphabets[letter];
      }
    }

}
return result.slice(0, result.length - 1)

}