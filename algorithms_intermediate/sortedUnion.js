function unite(arr1, arr2, arr3) {
  var arr = [];
  for (var i=0;i<arguments.length;i++) {
    arr.push(arguments[i]);
  }
  var singleArray = arr.reduce(function(a,b) {
    return a.concat(b);
  },[]);

  return singleArray.filter(function(item, i) {
    return singleArray.indexOf(item) === i;
  });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);