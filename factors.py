'''
factors.py

The factors function returns an object with a list of all cobminations of factors that multiply up to a given number, from a given array of numbers. Both JavaScript and Python versions of this library are provided.

Parameters:

	(1) target
		The number (integer or float0 being sought (integer or
		float, cientific notation accepted).

	(2) arr
		A numeric array of numbers from which to draw potential
		factor combinations. Text, boolean values and objects
		are ignored.


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





The MIT License (MIT)

Copyright (c) 2015 Falconer & Loi, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
'''
import time
def factors(target, arr):

    # Parameters test/fix
    if target == None or target == 0 or arr == None or len(arr) < 2:
        return None

    # Declarer
    start = int(round(time.time() * 1000))
    global iterations
    global combinations
    iterations=0
    combinations=[]

    # Keep only non-zero numbers
    arr = [x for x in arr if isinstance(x, float) or isinstance(x, int)]
    if len(arr) <= 1:
        return None

    # Sort
    arr.sort()

    # Recurse each array element
    for j in range(len(arr)):
        i = j
        r = []
        def recurse(v, i):
            global iterations, combinations
            while i < len(arr) and (v*arr[i-1]) < abs(target):
                iterations += 1
                r.append(arr[i])
                recurse(v*arr[i], i+1)
                i += 1
                r.pop()
            if v == target and len(r) > 1:
                combinations.append("".join(str(r)))
            return 1
        r.append(arr[j])
        recurse(arr[j], j+1)

    # Return
    return {
        "combinations": combinations
        , "count": len(combinations)
        , "time": str(int(round(time.time()*1000))-start) + " ms"
        , "array": arr
        , "target": target
        , "iterations": iterations
    }


# Testing
# Test cases
#print( getFactors(240,[2,3,4,5,6,7,8,9,10,11,12,24]) );
#print( getFactors(96,[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,83,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]) );
#print( getFactors(240,[233]) );
#print( getFactors(0,[1,2,3,4,5]) );
#print( factors(96,['2b',2,0.5,1.5,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,83,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]) );
#time.sleep(3)
