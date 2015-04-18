var x = 'Brad Pitt';
//  Charlie Sheen
var results = x === 'Charlie Sheen'  ?  'WINNING!' : 'Tiger Blood!';
console.log(results);



var stringReverse = function(str) {
	var backwards = str.split('').reverse().join('');
	return backwards;
};

var results = stringReverse('amazon');
console.log(results);