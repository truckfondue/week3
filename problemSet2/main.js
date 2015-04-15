// 1 Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
// 
var firstReverse = function(str) {
	var split = str.split('');
	var reverse = split.reverse().join('');
	return reverse;
};

// console.log(firstReverse('BATMAN AND ROBIN'));
// 
// 2 Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.
// 

var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
};

var text = 'So, today we have REALLY good day';

swapCase(text);