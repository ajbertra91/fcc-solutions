function factorialize(num) {
  if (num === 0) return 1;
  var count = 1;
  for (var i=2; i<=num;i++) {
    count *= i;
  }

  return count;
}

factorialize(5);