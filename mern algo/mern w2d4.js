/**
 * Creates an array of objects of non-consecutive numbers in the input array.
 * 
 * @param {number[]} arr an array of integers
 * @returns {Object[]} an array of OBJECTS with the index and value 
 * Note: the array should have ONLY non-consecutive values
 * The first element of the array is NEVER considered non-consecutive
 */


    function allNonConsecutive(arr) {
        var newArr= [];
        for( var i = 1; i<arr.length-1;i++){
            if(arr[i-1] != arr[i]-1){
            newArr.push({i: i, n:arr[i]})
            }
        }
    
        return newArr;
        
    }  
  
  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
  
  
  /**
   * Create an array of all consecutive values which add up to a given sum.
   * 
   * @param {number[]} arr an UNORDERED array of integers
   * @returns {Array<Array<number>>} a 2D array of numbers, with each inner array making up the sum
   * BONUS: what if there are zeros in the input array?
   */
  

//   function findConsecutiveSums(arr, sum) {
//     let newArr = []
//     let updatedSum = 0;
  
//     for(i = 0; i<arr.length;i++){ //Look for a possible solution starting with every value in the list.
//       let solutionArr = [] 
      
//       for(j = i;j<arr.length;j++){
//       updatedSum += arr[i]
//         if(updatedSum == 0){
//             newArr.push(solutionArr);
//         }
//         else{
//             solutionArr.push(arr[j])
//         }
//         }
//     }
//     return newArr
//     }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  //]