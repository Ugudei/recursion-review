// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //
  var emptyArr = [];
  var myString = '';
  if (obj === null) {
    myString = 'null';
  }
  if (obj === undefined) {
    myString = 'undefined';
  }
  if (typeof obj === 'number') {
    myString += obj;
  }
  if (obj === true) {
    myString = 'true';
  } else if (obj === false) {
    myString = 'false';
  }
  if (typeof obj === 'string') {
    myString = '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else if (obj.length > 0) {
      obj.forEach(element =>
        emptyArr.push(stringifyJSON(element)));

    }
    return myString += '[' + emptyArr.join() + ']';
  }
  if (typeof obj === 'object') {

      for (var key in obj) {
        if (typeof obj[key] !== 'function' || obj[key] !== undefined) {
          myString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
        return '{' + myString.slice(0, myString.length - 1 ) + '}';
  }


  return myString;

};
