// first find pivot point of rotated array
// then use the pivot to split array and search through the side where value is located
function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr);

    // if val is in left side of array, search that part
    if(arr[0] <= val && val <= arr[pivot - 1])
        return binarySearch(arr, val, 0, pivot - 1)
    else //search right part
        return binarySearch(arr, val, pivot, arr.length-1)

}

function findPivot(arr) {
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

function binarySearch(arr, val, left, right) {
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(val == arr[mid])
            return mid;
        else if(val < arr[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}

//module.exports = findRotatedIndex