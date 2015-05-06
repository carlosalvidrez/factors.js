/*
 
	getFactors v0.3
	Released on 2015.05.06
	By Falconer & Loi, LLC

	Returns an object with a list of all cobminations of factors that
	multiply up to a given number, from a given array of numbers.


	The MIT License (MIT)

	Copyright (c) 2015 Falconer & Loi, LLC.

	Permission is hereby granted, free of charge, to any person
	obtaining a copy of this software and associated documentation
	files (the "Software"), to deal in the Software without
	restriction, including without limitation the rights to use,
	copy, modify, merge, publish, distribute, sublicense, and/or
	sell copies of the Software, and to permit persons to whom the
	Software is furnished to do so, subject to the following
	conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.    



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
  
 
*/
function getFactors(target, arr, precision, verbose) {
 
	// Trap invalid parameters
	if(
		target==null || target==undefined
		|| typeof target!='number' //NEW, ADD TO factors
		|| arr==null || arr==undefined || arr.length==0
	){return null;}
	if(precision==null || precision==undefined) precision=2;
	if(verbose==null || verbose==undefined) verbose=false;

	// Declare, init
	var
		r=[]
		, start=new Date()
		, iteration=0
		, results={
			target: target
			, originalArray: arr
			, combinations: []
			, iterations: 0
		}
	;

	// Keep only non-zero numbers
	arr = arr.filter(function(e){ if(typeof e==='number' && e!=0) return true; })

	// Sort
	arr.sort(function(a,b){return a-b;});
	results.array = arr;

	// Log
	if(verbose) console.log( 'RUN --> array: ' + arr + ' (length:' + arr.length + '); target: ' + target + '; precision: ' + precision + '; ' );

	// Recursive function (main)
	function recurse( startAt, balance, r, i ){

		// If the number added up to too much, exit
		if(balance>target) return;

		// Start with the first/second element in the array
		if(i==0) {
			if(verbose) console.log('starting off of the first element');
			balance=arr[startAt];
			i=startAt+1;
		}//if

		// If the sum has added up to the original target, then push the combination into the results list
		if(balance==target){
			if(verbose) console.log('   bingo! (r:'+ r +'; i:'+i+').\n\n');
			// Insert a string with the combination of factors
			results.combinations.push(r.toString());
		}//if


		// Keep looking
		else{     

			// While the next array element fits and contributes to the target, recurse.
			while(
				i < arr.length
				&& balance*arr[i] <= target
			){            

				// Explicit state of variables (very time consuming)
				if(verbose) console.log(
					'   while (' + 'r:' + r + ')... balance:' + balance  + ' * '
					+ 'arr['+i+']:' + arr[i] + ' = ' + (balance*arr[i]) + '; '
					+ 'i:[' + i + '];  '
					+ ' iteration:' + results.iterations
				);

				// Push the value, because it fits

					// If the first number fits, push it
					if( results.iterations==0 && typeof arr[i-1]!='undefined') r.push(arr[i-1]);

					// Push the value being tested
					r.push(arr[i]);

				// Count the global number of iterations
				results.iterations++;

				// Try to fit the next value
				recurse( startAt, balance*arr[i], r, i+1 );

				// Remove the last item
				r.pop();

				// Next
				i++;

			}//while
		}//else
	}//recurse

	// Start
	var j=0;
	for(j=0; j<arr.length; j++) { //arr.length
		results.iterations=0;
		recurse(j,target,[],0);
		iteration+=results.iterations;
	}//for

	// Gather results, last touches
	results.precision = precision;
	results.time = ( new Date() - start );
	results.iterations=iteration;
       
	// Cleanup
	r=null;
	start=null;
	verbose=null;
	arrayHasFloat=null;

	// Return
	return( results );

}//getfactors
