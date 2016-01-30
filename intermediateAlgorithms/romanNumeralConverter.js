function convert(num) {
  console.log('num: ', num);
  var str = num.toString();
  var len = str.length;
  var result = '';
  var resultValue;
  var answer = '';
  
  var convert = function convert(x) {
    var val;
    switch (parseInt(x)) {
      case 1:
        val = 'I';
        break;
      case 2:
        val = 'II';
        break;
      case 3:
        val = 'III';
        break;
      case 4:
        val = 'IV';
        break;
      case 5:
        val = 'V';
        break;
      case 6:
        val = 'VI';
        break;
      case 7:
        val = 'VII';
        break;
      case 8:
        val = 'VIII';
        break;
      case 9:
        val = 'IX';
        break;
      case 10:
        val = 'X';
        break;
      case 10:
        val = 'X';
        break;
      case 20:
        val = 'XX';
        break;
      case 30:
        val = 'XXX';
        break;
      case 40:
        val = 'XL';
        break;
      case 50:
        val = 'L';
        break;
      case 60:
        val = 'LX';
        break;
      case 70:
        val = 'LXX';
        break;
      case 80:
        val = 'LXXX';
        break;
      case 90:
        val = 'XC';
        break;
      case 100:
        val = 'C';
        break;
      case 200:
        val = 'CC';
        break;
      case 300:
        val = 'CCC';
        break;
      case 400:
        val = 'CD';
        break;
      case 500:
        val = 'D';
        break;
      case 600:
        val = 'DC';
        break;
      case 700:
        val = 'DCC';
        break;
      case 800:
        val = 'DCCC';
        break;
      case 900:
        val = 'CM';
        break;
      case 1000:
        val = 'M';
        break;
      case 2000:
        val = 'MM';
        break;
      case 3000:
        val = 'MMM';
        break;
      default:
        val = '';
        break;
    }
    return val;
  };
  
  var getValue = function getValue(a,times) {
    console.log('times: ', times);
    var r = '';
    for (var i=1;i<parseInt(times);i++) {
      r += '0';
    }
    console.log('a + r: ', a.toString() + r.toString());
    return a.toString() + r.toString();
  };
  
  for (var i=0;i<len;i++) {
    result = str.split('').splice(i,1);
    console.log('result: ', i, result);
    resultValue = getValue(result,len - i);
    answer += convert(resultValue);
  }
  
  console.log('answer: ', answer);
  return answer;
}

convert(36);