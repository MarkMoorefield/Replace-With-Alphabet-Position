// Created a function called alphabetPosition.
// Created a variable called alphabet, and plugged in all the letters. 
// made the text variable lowercase and split it up into an array. 
// Then I made it so that depending on the letter switched it to the corresponding number.
// I then joined the numbers together into an array and returned it.   


function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }