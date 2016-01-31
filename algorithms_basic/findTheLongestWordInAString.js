function findLongestWord(str) {
  var arr = str.split(' ');
  var sortedArr = arr.sort(function(a,b) {
    return b.length - a.length;
  });

  return sortedArr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");