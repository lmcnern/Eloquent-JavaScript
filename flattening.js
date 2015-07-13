//Use the reduce method in combination with the concat method to
//“flatten” an array of arrays into a single array that has all the
//elements of the input arrays.


var arrays = [
[1, 2, 3],
['cats', 'dogs'],
['hamsters']
];

console.log(arrays.reduce(function(res, curr) {
  return res.concat(curr);
}));
