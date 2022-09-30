/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. 
*/

function high(x){
    //We look for the word with the highest score
    //Lets create 2 variables

    let highestScore = 0
    let highestWord = ''

    // Checking what x gives us
    console.log(x)

    // We use split to make each word in the array a different item. 
    const words = x.split(' ')
    console.log(words)

    // We then iterate over each word in the array
    for (let i = words.lengh -1; i >= 0; i--) {
        const word = words[i]
        // To count all the letters inside word

        let wordScoreCounter = 0

        // We split each letter separately
        word.split('').forEach(letter => {

            /*
             we sum up the word score but inorder to get it, we  need to know the value
            of the character. We use the ascii character where each letter has its code.
            
            a is 97. We remove 96 as every other character increases
             */
            wordScoreCounter = wordScoreCounter + (letter.charcodeAt(0) - 96)
        })

            console.log(word, wordScoreCounter)

            // update highest score and highest word

            if(wordScoreCounter >= highestScore) {
                highestScore = wordScoreCounter
                highestWord = word
            }
            

    }
    return highestWord


    
  }