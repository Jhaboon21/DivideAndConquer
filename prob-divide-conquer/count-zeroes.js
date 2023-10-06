function countZeroes(arr) {
    let firstZero = findStart(arr)
    if(firstZero == -1) 
        return 0;
    else
        return arr.length - firstZero;
}

function findStart(arr) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        // find middle point in array
        let middleIndx = Math.floor((left + right)/2)
        //console.log("current index: " + middleIndx + " and value is: " + arr[middleIndx])

        // if the middleIndex's value == 0 AND (if middle's INDEX is 0 or value before is 1)
        // return index
        if(arr[middleIndx] === 0 && (middleIndx === 0 || arr[middleIndx - 1] === 1)) {
            //console.log("found: " + middleIndx)
            return middleIndx;
        }
        // if value is 1 move to right half
        else if(arr[middleIndx] === 1) {
            //console.log("moving to right")
            left = middleIndx + 1;
        }

        // if value is 0 but value to left is not 1, move to left
        else {
            //console.log("moving to left")
            right = middleIndx - 1
        }
    }
    // if while ends and no 0 is found, return -1
    //console.log("cannot find 0")
    return -1
}

//module.exports = countZeroes