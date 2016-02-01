/*
 * WORKS!
 */
function pair(str) {
  console.log('str: ', str);
  var basePairs = str.split('');
  console.log('basePairs: ', basePairs);
  
  var answer = [];
  
  for (var i=0;i<basePairs.length;i++) {
    var item = basePairs[i];
    var temp = [];
    if (item === 'A') {
      temp.push(item,'T');
      answer.push(temp);
    } else if (item === 'T') {
      temp.push(item,'A');
      answer.push(temp);
    } else if (item === 'C') {
      temp.push(item,'G');
      answer.push(temp);
    } else if (item === 'G') {
      temp.push(item,'C');
      answer.push(temp);
    }
  }
  
  console.log('answer: ', answer);
  return answer;
}

pair("GCG");



/*
 * DOES NOT RETURN THE CORRECT RESULTS!
 */

// function pair(str) {
//   console.log('str: ', str);
//   var basePair = str.split('');
  
//   console.log('basePair: ', basePair);
//   var answer = basePair.map(function(x) {
//     console.log('x: ', x);
//     console.log('typeof(x): ', typeof(x));
//     var result = [];
//     switch(x) {
//       case 'A':
//         return result.push(x, 'T');
//       case 'T':
//         return result.push(x, 'A');
//       case 'C':
//         return result.push(x, 'G');
//       case 'G':
//         return result.push(x, 'C');
//     }
//   }).map(function(pair) {
//     return [].concat(pair);
//   });
//   console.log('answer: ', answer);
//   return answer;
// }

// pair("GCG");