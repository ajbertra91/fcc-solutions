function diff(arr1, arr2) {
  var reducedArr1 = [];
  var reducedArr2 = [];
  
  reducedArr1 = arr1.reduce(function(a,b) {
    return arr2.indexOf(b) === -1 ? a.concat(b) : a;
  },[]);
  
  reducedArr2 = arr2.reduce(function(a, b) {  
    return arr1.indexOf(b) === -1 ? a.concat(b) : a;
  },[]);
  
  return reducedArr2.concat(reducedArr1);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);