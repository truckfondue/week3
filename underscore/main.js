var nums = [1,2,3];
// goal: [1,4,9]

var results = _.map(nums, function(num){
	return num * num;
});
console.log('Map:', results);


// Challenge: reduce
// 'National Aeronautics Space Administration'
// goal: N.A.S.A
// 

var str = 'National Aeronautics Space Administration';
var acr = _.reduce(str.split(' '), function(acronym, word){
	var firstChar = word[0].toUpperCase() + '.';
	return acronym + firstChar;
}, ''

);

console.log('reduce:', acr);


// Challenge: find
// 
var people = [
	{id: 1, name: 'Chris'},
	{id: 2, name: 'Alex'},
	{id: 3, name: 'Scott'},
];

var person = _.find(people, function(item){
	return item.id === 2;
});

console.log('Find: ', person);

var names = _.pluck(people, 'name');

console.log(names);

// Challenge: unique;
var list = ['Alex', 'Alex', 'Alex', 'Alex', 'Chris'];
var uniqueNames = _.uniq(list);

console.log(uniqueNames);

var photos = [
	{src: 'image.jpg', tags: ['happy', 'cat', 'dancing']},
	{src: 'catFace.png', tags: ['frown', 'cat', 'noplz']},
	{src: 'dog.woof', tags: ['barking', 'bark', 'barks']},
	{src: 'cat.tapestry', tags: ['happy', 'cat', 'ysplz']}
];

var tags = _.pluck(photos, 'tags');
console.log(tags);

var flatten = _.flatten(tags);
	
console.log(_.uniq(flatten));


