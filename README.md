# factors
Returns an object with a list of all cobminations of factors that multiply up to a given number, from a given array of numbers.

	Parameters:
	(1) target
		The number (integer or float0 being sought (integer or
		float, cientific notation accepted).
	(2) arr
		A numeric array of numbers from which to draw potential
		factor combinations. Text, boolean values and objects
		are ignored.
	(3) precision
		An integer that indicates the number of decimal places
		of precision to use, when computing the sum of potential
		combinations of factors.
	(4) verbose
		A boolean flag that indicates whether or not to output
		to the browser's console (console.log), the status of
		every combination or iteration of factors being tried.
		PLEASE NOTE that, on a large target or a large array
		turning this flag on (true) takes much longer to
		process.
		
		
	Output:
	An object with the following properties:
	(1) orirignalArray
		The originally given array "as is".
	(1) array
		The array used to compute factors with only numeric
		values kept.
       
	(3) target
		The value for which factors are being sought.
       
	(4) dataType
		Whether the numeric array contains only integers or
		at least one float number.
       
	(5) combinations
		An array with all found combinations of factors
		that sum up to the 'target' number.
       
	(6) iterations
		The total number of sums explored when searching
		with all possible combinations of factors.
       
	(7) time
		Processing time, in milliseconds.
