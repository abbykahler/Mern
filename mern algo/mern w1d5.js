/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */


function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
    let pivot = arr[pivotIndex];

    while(startIdx < endIdx){
        while(arr[startIdx] < pivot){
            startIdx++;
        }
        while(arr[endIdx] > pivot){
            endIdx--;
        }
        if (startIdx < endIdx){
            let temp = arr[startIdx];
            arr[startIdx] = arr[endIdx];
            arr[endIdx] = temp;
        }
    }
    return startIdx;

}

function quickSort(arr, startIdx, endIdx) {
    var index;
    if (startIdx < endIdx) {
     let pi_idx = arrayPartition(arr);
     quickSort(arr, startIdx,pi_idx-1);
     quickSort(arr, pi_idx+1,endIdx)
    return arr;
}

// const arr = [1, 5, 8, 4, 2, 6]
// console.log("Pivot Value: " + arrayPartition(arr));
// console.log(arr);

console.log(quickSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]