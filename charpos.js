function countLetters(stringInput) {

    var letterPos = {};
    for (var i = 0; i < stringInput.length; i++) {
      var letter = stringInput[i];

      if (letter !== ' ') {
        if (letterPos[letter] === undefined) {
          letterPos[letter] = [i];
        } else {
          letterPos[letter].push(i);
        }
      }

    }

    return letterPos;
  }  

console.log(countLetters('lighthouse in the house'));
