//When we looked up all the people in our data set that lived more than 90
//years, only the latest generation in the data came out. Let’s take a closer
//look at that phenomenon.

//Compute and output the average age of the people in the ancestry data set
//per century. A person is assigned to a century by taking their year of death,
// dividing it by 100, and rounding it up, as in Math.ceil( person.died / 100).

var ancestry = require('./ancestry.js');
var ancestryFile = JSON.parse(ancestry);

//========== average function from book ==========

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//========= my code ==========

var perCentury = {};
ancestryFile.forEach(function(person) {
    var div = String(Math.ceil(person.died/100));
    if (!(div in perCentury)) {
        perCentury[div] = [];
    }
    perCentury[div].push(person.died - person.born);
});

for (div in perCentury) {
    console.log(average(perCentury[div]));
}
