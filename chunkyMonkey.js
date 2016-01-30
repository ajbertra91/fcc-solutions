function chunk(arr, size) {
  // Break it up.
  var subArr = [];
  var newArr = [];
  for (var i=0;i<arr.length;i++) {
    subArr.push(arr[i]);
    if (subArr.length === size && (i < arr.length)) {
      newArr.push(subArr);
      subArr = [];
    } else if (subArr.length < size && (i+1 === arr.length)) {
      newArr.push(subArr);
      subArr = [];
    } else {
      continue;
    }
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);