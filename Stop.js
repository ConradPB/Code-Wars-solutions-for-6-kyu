function spinWords(string){
    const stringArray = string.split(' ')
    let result = ''

    stringArray.map((str, i) => {
        if (str.length >= 5){
          stringArray[i] = str.split('').reverse().join('');
        } else {
          stringArray[i] = str;
        }
      result = stringArray.join(' ');
      }) 

    
    
}