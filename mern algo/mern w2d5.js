/**
 * Finds the indices of the values that add up to the sum.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the TWO INDICES of the elements that add up to the sum
 * Assume there is only one solution.
 * Numbers can only be used once.
 */


function sumTwo(arr, sum) {
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                number.push(i);
                number.push(j);
                return number;
            }
        }
    }
}
        
    console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
    console.log(sumTwo([[2, 7, 11, 15], 22])); // should log [1, 4]



/**
   * Finds the most frequent values in an array.
   * 
   * @param {number[]} arr an array of ingegers
   * @param {number} k the number of frequents to find
   * @returns {number[]} the "k" most frequent values in the input array
   * the input array WON'T NECESSARILY BE IN ORDER
   * the output array NEED NOT BE ORDERED
   * you can assume there's always a valid answer
   */
  
  function kMostFrequent(arr, k) {
    let obj = {}, newArr = [], temp = 0, count=[];
    for(let i = 0; i < arr.length; i++) {
      if(obj[arr[i]]) {
        obj[arr[i]] += 1;
  
      } else {
        obj[arr[i]] = 1;
        count.push(arr[i]);
      }
    }
    // obj { 1: 3, 2: 2, 3: 1}
    // obj[count[0]]
  while(k>0){
    for(let j = 0; j < count.length-1; j++){
      for(let i = j; i < count.length-1; i++)
        if(obj[count[i]]<obj[count[i+j+1]]){
          temp = count[i+j+1];
        } else {
          temp = count[i];
        }
    }
    newArr.push(temp)
  }
    
  }
  
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2] or [2, 1]
//   console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
//   // should log [1, 2] or [2, 1]
  
//   console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
//   // should log [0]
  
//   console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
//   // should log [1, 2, 3] in any order