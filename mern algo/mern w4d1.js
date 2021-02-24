/**
 * Removes every element until the invoked callback returns true.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the SAME array (ie. WORKING IN PLACE)
 * 
 * If it never returns true, the array should ultimately be empty
 */

function dropIt(arr, callback) {
    let count = 0;
    for(i=0;i<arr.length; i++){
      if(callback(arr[i]) === true){
        for(y=i;y<arr.length;y++){  //Push remaining values into a new array.
          count++ //keeps track of how many items to splice.
        }
        arr.splice(0, count) //replace the original array
        return arr //return the original array... now shortened.
      }
    }
  }
  
  const isEven = num => num % 2 === 0
  
  const firstArr = [1, 3, 5, 7, 2, 4, 1, 6];
  const firstResult = dropIt(firstArr, isEven)
  
  
  const secondArr = [1, 3, 5, 7, 9];
  const secondResult = dropIt(secondArr, isEven);
  
  // console.log(secondResult); // should log []
  // console.log(secondArr === secondResult); // should log true
  /**
   * Determines whether a string can be rearranged to make a palindrome.
   * 
   * @param {string} str the original string
   * @return {boolean}
   * 
   * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
   */
  
  function couldBePalindrome(str) {
    // your code here
  }
  
  console.log(couldBePalindrome('PPo'));
  // should log true - could be 'PoP'
  
  console.log(couldBePalindrome('oooPP'));
  // should log true - could be 'PoooP'
  
  console.log(couldBePalindrome('Yuuyuu'));
  // should log false; `Yuuuuy` is not due to casing