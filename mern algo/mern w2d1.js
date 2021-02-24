/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArrays(arr1, arr2) {

    var arr3= [];
    for ( var i = 0; i < arr1.length; i++){

        for( var j = 0; j < arr2.length; j++){ 
            if ( arr1[i] == arr2[j] ){
                arr3.push(arr1[i]);
                break;
            }
        }
    }
    return arr3;
}
console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));

  // should log [2, 2]

/**
   * BONUS: ensure that each element in the returned array is unique
   * 
   * @param {number[]} arr1 a sorted array of numbers
   * @param {number[]} arr2 a sorted array of numbers
   * @returns {number[]} a NEW SORTED array of the shared elements
   */

function intersectSortedArraysDedupe(arr1, arr2) {
    var arr3= [];
    for ( var i = 0; i < arr1.length; i++){

        for( var j = 0; j < arr2.length; j++){ 
            if ( arr1[i] == arr2[j] ){
                if( arr3.includes(arr1[i]) ){
                    continue;
                }
                else{
                arr3.push(arr1[i]);
                }
            }

        }

    }
    return arr3;
}
console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]