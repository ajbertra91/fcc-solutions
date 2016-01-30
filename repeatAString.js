function repeat(str, num) {
  // repeat after me
  var newStr = '';
  if (num < 0) {
    return newStr;
  } else if (num > 1) {
    for (var i=0; i<num; i++) {
      newStr += str;
    }
    return newStr;
  } else {
    return str;
  }
}

repeat("abc", 3);