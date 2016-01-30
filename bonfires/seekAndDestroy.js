function destroyer(arr) {
  // Remove all the values
  var newArray = arguments[0];
  var secArray = [];
  for (var i = 1; i < arguments.length; i++) { 
    secArray.push(arguments[i]);
  }
 
  return newArray.filter(function(item) {
    return secArray.indexOf(item) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);