function countLetters(stringInput) {

  var noSpace = stringInput.slice(' ')
  var letterCounts = {};

    for (var i = 0; i < noSpace.length; i++) {
      var letter = noSpace[i];
      var letterCount = letter
      if (letter !== ' ') {
        if (letterCounts[letterCount] === undefined) {
          letterCounts[letterCount] = 0;
        }
        letterCounts[letterCount] += 1;
      }
    }
    return letterCounts
};

console.log(countLetters('lighthouse in the house'));
