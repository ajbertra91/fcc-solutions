function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^\w\s]|_/g, '');
  str = str.replace(/\s/g, '');
  
  return str === str.split('').reverse().join('');
}


palindrome("eye");