function myReplace(str, before, after) {
  var isCapital = before.charAt(0) === before.charAt(0).toUpperCase();

  after = isCapital ? after.charAt(0).toUpperCase() + after.substring(1,after.length) : after;
  
  return str.split(' ').map(function(word) {
    return word === before ? after : word;
  }).join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
