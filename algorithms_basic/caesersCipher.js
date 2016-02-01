function rot13(str) { // LBH QVQ VG!
  var result = '';
  for (var i=0;i<str.length;i++) {
    var c = str.charCodeAt(i);
    
    if (c >= 65 && c <= 77) {
      result += String.fromCharCode(c+13);
    } else if (c > 77 && c <= 90) {
      result += String.fromCharCode(c-13);
    } else {
      result += String.fromCharCode(c);
    }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");