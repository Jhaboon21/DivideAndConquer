function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        // if mid value is bigger than value on right, return value on right as pivot point
        if(arr[mid] > arr[mid + 1])
            return mid + 1;

        // if mid value is less than other value but greater than start value,
        // move to right
        else if(arr[mid] < arr[mid + 1] && arr[left] <= arr[mid])
            left = mid + 1;
        
        else 
            right = mid - 1;
    }
    // if it wasn't rotated
    return 0;
}

//module.exports = findRotationCount