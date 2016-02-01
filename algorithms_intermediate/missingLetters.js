function fearNotLetter(str) {
  var answer;
  var charCodes = str.split('').map(function(letter) {
    return letter.charCodeAt(0);
  });
  
  for (var i=0;i<charCodes.length;i++) {
    var curCode = charCodes[i];
    var oldCode = charCodes[i-1];
    if (oldCode === curCode - 2) {
      return String.fromCharCode(curCode - 1);
    }
  }
  
  return answer;
}

fearNotLetter("abce");