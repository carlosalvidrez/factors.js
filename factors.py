# Test cases
#print( getFactors(240,[2,3,4,5,6,7,8,9,10,11,12,24]) );
#print( getFactors(96,[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,83,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]) );
#print( getFactors(240,[233]) );
#print( getFactors(0,[1,2,3,4,5]) );
#print( factors(96,['2b',2,0.5,1.5,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,83,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]) );
#time.sleep(3)
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
    return {
        "combinations": combinations
        , "count": len(combinations)
        , "time": str(int(round(time.time()*1000))-start) + " ms"
        , "array": arr
        , "target": target
        , "iterations": iterations
    }
