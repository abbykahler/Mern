/**
 * Creates a union (elements in either) from two sorted arrays.
 * 
 * @param {number[]} arr1 a SORTED array of numbers
 * @param {number[]} arr2 a SORTED array of numbers
 * @returns {number[]} a NEW SORTED array with elements from either
 */

function unionSortedArrays(arr1, arr2){
        // for(i=0; i<arr1.length; i++)
        // for(j=0; i<arr2.length; i++)
    let i =0, j=0, newArr = [];
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] === arr2[j]){
            newArr.push(arr1[i]);
            
            console.log()
            i +=1;
            j +=1;
        } else if(arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            break;
        } else {
            newArr.push(arr2[j]);
            j +=1;
        }
    }
    return newArr;
}
    // your code

console.log(unionSortedArrays([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 2, 3, 3]
console.log(unionSortedArrays([1, 2], [3, 4]));
  // should log [1, 2, 3, 4]

/**
   * BONUS: ensure that the output array has only unique numbers
   * 
   * @param {number[]} arr1 a SORTED array of numbers
   * @param {number[]} arr2 a SORTED array of numbers
   * @returns {number[]} a NEW SORTED array with elements from either
   */

function unionSortedArraysDedupe(arr1, arr2) {
    // your code
}

console.log(unionSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 3]


/**
   * Calculates the absolute difference between the sum of two diagonals.
   * 
   * @param {Array<Array<number>>} twoDArray a 2-dimensional array of numbers
   * Note that the outer and inner arrays will all be equal in length.
   */

function diagonalDifference(twoDArray) {
    // your code here
}

  Math.abs(5 - 10); // returns 5
  
  console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
  // should log 0: (1 + 5 + 9) - (3 + 5 + 7)