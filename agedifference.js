//Using the example data set from this chapter,
//compute the average age difference between mothers and children
//(the age of the mother when the child is born). You can use the average
//function defined earlier in this chapter.

//Note that not all the mothers mentioned in the data are themselves present
//in the array. The byName object, which makes it easy to find a person’s object
//from their name, might be useful here.

var ancestry = require('./ancestry.js');

//============ INTRO CODE FROM BOOK ============
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

////============ ANCESTRY CODE ============

var ancestryFile = JSON.parse(ancestry);

var byName = {};
ancestryFile.forEach(function(person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestryFile.forEach(function(person) {
  byName[person.name] = person;
});

//============ MY CODE ============

var ageDifference = ancestryFile.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));
