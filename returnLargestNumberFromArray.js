function largestOfFour(arr) {
  // You can do this!
  arr = arr.map(function(subarr) {
    var largest = subarr.sort(function(a,b) {
      return b - a;
    });
    largest = largest[0];
    return largest;
  });
  var largestNum = arr[0];
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);