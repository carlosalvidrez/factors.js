/*
 
	getFactors v0.43
	Released on 2015.05.09
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
  


	Test cases:
 
		console.log(getFactors(12,[0.5,1.5,2,3,4,5,16,6]));
		console.log(getFactors(12,[-12,-4,-3,-1,0.5,1.5,2,3,4,5,16,6]));
		console.log(getFactors(12,[-12,-4,-3,-1]));
		console.log(getFactors(12,[-12,-6,3,4,5,-1,-0.5,-2]));
		console.log(getFactors(12,['a','b','c']));


*/
function getFactors(target,arr,verbose) {

	// Parameters test/fix
	if(target==null || target==undefined || typeof target!='number' || target==0 || arr==null || arr==undefined || arr.length<=1) return null;

	// Declare
	var 
		start = new Date()
		, iterations = 0
		, combinations=[]
		, verbose = ( verbose==null || verbose==undefined ? false : verbose )
	;

	// Keep only non-zero numbers
	arr = arr.filter(function(e){if(typeof e==='number' && e!=0) return true;})
	if(arr.length<=1) return null;

	// Sort
	arr.sort(function(a,b){return a-b;});

	// Recurse each array element
	for(var j=0;j<arr.length;j++) {
		var i=j, r=[];
		function recurse(v,i){
			while( i<arr.length && v<Math.abs(target) ){
				iterations++;
				r.push(arr[i]);
				//if(verbose) console.log(r + '; v:'+v+'; i:'+i+'; arr[i]:'+arr[i]+'; iterations:'+iterations);
				recurse(v*arr[i],i+1);
				i++; 
				r.pop();
			}//while
			if(v==target && r.length>1) combinations.push(r.toString()); 
		}//recurse
		r.push(arr[j]);
		recurse(arr[j],j+1);
	}//for

	// Results
	return({
		target: target
		, array: arr 
		, combinations: combinations
		, time: new Date()-start
		, iterations: iterations+1
		, verbose: verbose
		
	});
}//getFactors
