
// 1. Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
// 
var getName = function(object) {
		return object.name;

	};

var luisa = { name: 'Luisa', age: 25 } ;

// 2 Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24
// 
var totalLetters = function(arr) {
	return arr.join('').length;

};

var arr1 = ['javascript', 'is', 'awesome'];
var arr2 = ['what', 'happened', 'to', 'my', 'function'];

// 3 Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// 
var keyValue = function(a, b) {
	var obj = {};
	obj[a]=b;
	return obj;
};

// 4 Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndexnega should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
// 
var negativeIndex = function(a, b) {
	return a[(a.length+b)];

};
// a is an array
// b is a negative integer
// 
	
// 5 Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

var removeM = function(str) {
	var split = str.split('');
	for (var i=0; i<split.length; i++) {
		if (split[i]==='m') {
			split[i]='';
		}
	}
	return split.join('');
};

// 6 Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30
// 

var printObject = function(obj) {
	// obj is an object
	
	for (var key in obj){
		console.log(key + " is " + obj[key]);
	}	
};

// console.log(printObject({ a: 10, b: 20, c: 30 }));

// 7 Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

var vowels = function(str) {
	var vowelLetters = [];
	for (var i=0; i<str.length; i++) {
		if (str.charAt(i)===('a')) {
			vowelLetters.push('a');
		} else if (str.charAt(i)===('e')) {
			vowelLetters.push('e');
		} else if (str.charAt(i)===('i')) {
			vowelLetters.push('i');
		} else if (str.charAt(i)===('o')) {
			vowelLetters.push('o');
		} else if (str.charAt(i)===('u')) {
			vowelLetters.push('u');
		}
	} return  vowelLetters;
};
 
// 8 Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false

var twins = function(arr) {
	if (arr.length%2 !==0) {
		return false;
	} else { 
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]===undefined) {
				console.log(1);
				return false;
			} 
		} 

		for (var j = 0; j < arr.length-1; j+=2) {
			if (arr[j] !== arr[j+1]) {
				console.log(2);
				return false;
			}
		}
				
	}
	return true;	

};


// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));   // true
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));  // 
// console.log(twins(['a', 'a', 'b', 'z'])); 			 // false
// console.log(twins(['a', 'a', undefined]));			 // false



// 9 Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

var or  = function(arr) {
	if (arr.length===0) {
		return false;
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== false) {
				return true;
			}
		}
	}
	return false;
};


// console.log(or([false, false, true, false])); // ); //should return true
// console.log(or([false, false, false])); // should); // return false
// console.log(or([])); // should return false

// 10 Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function(a) {
    return a.sort().filter(function(item, pos) {
        return !pos || item != a[pos - 1];
    });
};


//  console.log(unique(['a', 'b', 'a', 'c', 'd', 'd'])); // should return ['a', 'b', 'c', 'd']
//  console.log(unique(['todd', 'avery', 'maria', 'avery'])); // should return ['todd', 'avery', 'maria']


 
var letterCount = function(str){
	var words = str.split(' ');
	var arr = [];
	console.log(str);
	for (var i = 0; i < words.length; i++) {
		arr.push(getFrequency(words[i]));
		console.log(arr);
	}
	return arr;
};
console.log(letterCount('This is the string to analyze'));

// var max = Math.max.apply(null, _.values(obj))
// return {word: word, count: max}



function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
}

Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};

function LetterCountI(str){
    var temp = str.split(" ");
    var final = '', weight = 0;
    for(var i = 0; i < temp.length; ++i) {
        var word = temp[i].split("");
        if(word.getUnique().length < word.length) {
            var diff = word.length - word.getUnique().length;
            if(diff > weight){
                weight = diff;
                final = temp[i];
            }
        }
    }
    return final;
}

console.log(LetterCountI("Catt dooog"));
console.log(LetterCountI("toddday is the greatttttest day ever!"));



























