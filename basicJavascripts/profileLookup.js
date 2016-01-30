//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intruiging Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  },
];


function lookUp(name, prop){
// Only change code below this line
  var result;
  for (var i=0;i<contacts.length;i++) {
    var contact = contacts[i];
    if (contact.firstName === name) {
      if (contact[prop]) {
        return contact[prop];
      } else {
        return 'No such property';
      }
    } else {
      result = 'No such contact';
    }
  }
  return result;
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "address");
