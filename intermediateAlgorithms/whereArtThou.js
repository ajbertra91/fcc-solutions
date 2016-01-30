function where(collection, source) {
  var props = Object.keys(source);
  var sameProp = [];
  var answer = [];
  
  answer = props.reduce(function(prev,cur) {
    sameProp = collection.reduce(function(a, b) {
      var prop = cur;
      return b.hasOwnProperty(prop) && b[prop] === source[prop] ? a.concat(b) : a;
    },[]);
    return prev.concat(sameProp);
  },[]);
  
  // What's in a name?
  return sameProp;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
