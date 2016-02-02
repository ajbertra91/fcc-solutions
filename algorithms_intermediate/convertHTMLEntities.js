function convert(str) {
  var regex1 = /\&/g;
  var regex2 = /</g;
  var regex3 = />/g;
  var regex4 = /"/g;
  var regex5 = /'/g;
  
  str = str.replace(regex1, '&amp;');
  str = str.replace(regex2, '&lt;');
  str = str.replace(regex3, '&gt;');
  str = str.replace(regex4, '&quot;');
  str = str.replace(regex5, '&apos;');
  
  // &colon;&rpar;
  return str;
}

convert("Dolce & Gabbana");