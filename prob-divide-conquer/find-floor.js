// to find floor of val, 
// is to find arr[mid -1] to be less than val but also arr[mid] is greater than val
// then return arr[mid-1]
function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middleIndx = Math.floor((left + right) / 2);

        // if val is greater or equal to last val, return that value
        if(val >= arr[right])
            return arr[right]

        // if middleIndex value is greater than val AND index's value before it is less than val
        // return the floor 
        if(val < arr[middleIndx] && arr[middleIndx - 1] <= val)
            return arr[middleIndx - 1];

        // if value is less than midValue, move to left
        else if(val < arr[middleIndx])
            right = middleIndx - 1;

        // if value is greater than midIndx but midIndx-1 is also greater, move right 
        else 
            left = middleIndx + 1;
    }
    // if value less than the floor, return -1
    return -1
}

//module.exports = findFloor