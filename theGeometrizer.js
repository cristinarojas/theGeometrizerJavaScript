(function() {
	var radius = 3;
	var pi = 3.1416; // Math.PI

	var circumference = (2 * pi * radius);
	var area = (pi * Math.pow(radius, 2)); // radius * radius 

	console.log('The circumference is ', circumference);
	console.log('The area is ', area);

	// The circumference is  18.8496
	// The area is  28.2744

})();

/* The Geometrizer

Calculate properties of a circle.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN". */

