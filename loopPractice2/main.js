$(document).on('ready', function() {


// booiler plate
	// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	// for(var i=0; i<animals.length; i++) {
 // 		console.log(animals[i]);
	// };
	// 
	// 
	// Problem 1

	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	for(var i=0; i<(animals.length - 1); i++) {
 		console.log(animals[i]);
	};
  
  	// Problem 2

  	// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
  	for(var i=0; i<(animals.length); i+=2) {
   		console.log(animals[i]);
  	};

  	// Problem 3

  	for(var i=4; i>=0; i--) {
   		console.log(animals[i]);
  	};

  	// Problem 4

  	for(var i=0; i<animals.length; i++) {
  		if (i===0 || i===(animals.length-1)){
  		console.log(animals[i]);	
  		} else {
  		console.log(animals[i]);
   		console.log(animals[i]);	
  		}
   		
  	};

});