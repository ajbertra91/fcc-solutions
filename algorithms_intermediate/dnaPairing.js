/*
 * DOES NOT RETURN THE CORRECT RESULTS!
 */

function pair(str) {
  console.log('str: ', str);
  var basePair = str.split('');
  
  console.log('basePair: ', basePair);
  var answer = basePair.map(function(x) {
    console.log('x: ', x);
    console.log('typeof(x): ', typeof(x));
    var result = [];
    switch(x) {
      case 'A':
        return result.push(x, 'T');
      case 'T':
        return result.push(x, 'A');
      case 'C':
        return result.push(x, 'G');
      case 'G':
        return result.push(x, 'C');
    }
  }).map(function(pair) {
    return [].concat(pair);
  });
  console.log('answer: ', answer);
  return answer;
}

pair("GCG");