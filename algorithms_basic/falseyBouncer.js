function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(item) {
    switch(item) {
      case 0:
      case "":
      case undefined:
      case NaN:
      case 0:
      case false:
        return item;
      default:
        return item;
    }
  });
}

// bouncer([7, "ate", "", false, 9]);


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(item) { 
    return item; 
  });
}

bouncer([7, "ate", "", false, 9]);