# factors.js
Returns a JavaScript object with a list of all cobminations of factors that multiply up to a given number, from a given array of numbers. 

Parameters:

	(1) target
		The number (integer or float0 being sought (integer or
		float, cientific notation accepted).
	(2) arr
		A numeric array of numbers from which to draw potential
		factor combinations. Text, boolean values and objects
		are ignored.
	(3) verbose
		A boolean flag that indicates whether or not to output
		to the browser's console (console.log), the status of
		every combination or iteration of factors being tried.
		PLEASE NOTE that, on a large target or a large array
		turning this flag on (true) takes much longer to
		process.
		
		This is only applicable to the JavaScript version of the library for now.
		
		
Output:
An object with the following properties:

	(1) array
		The array used to compute factors with only numeric
		values kept.
       
	(2) target
		The value for which factors are being sought.
       
	(3) combinations
		An array with all found combinations of factors
		that sum up to the 'target' number.
       
	(4) iterations
		The total number of sums explored when searching
		with all possible combinations of factors.
       
	(5) time
		Processing time, in milliseconds.
