function translate(str) {
  if (str.charAt(0).match(/[aeiou]/g)) return str + 'way';
  var arr = str.split('');
  
  for (var i=0;i<arr.length;i++) {
    if (arr[i].match(/[aeiou]/g)) {
      var index = arr.indexOf(arr[i]);
      str = arr.join('');
      return str.substr(index, str.length) + str.substr(0,index) + 'ay';
    }
  }
  
}

translate("consonant");