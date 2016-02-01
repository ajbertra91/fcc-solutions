function where(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a,b) { return a - b; });
  console.log(arr);
  for (var i=0;i<arr.length;i++) {
    console.log('num: ', num);
    console.log('i val: ',arr[i]);
    console.log('i+1 val', arr[i+1]);
    if (num === arr[i]) {
      return i;
    } else if (num > arr[i] && num < arr[i+1] || num > arr[i] && !arr[i+1]) {
      return i+1;
    }
  }
}

where([40, 60], 50);