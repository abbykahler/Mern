/**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

function questionMarks(str) {
    let questionCount = 0;
    let sum = 0;
    let isANumber = false;
    
    for(let i=0;i<str.length;i++){
      if(i == str.length-1 && isANumber == false){
        return NaN
      }
  
      //CASE 1: IT FINDS A NUMBER
      if(!isNaN(parseInt(str[i]))){ // Checks for number
        isANumber = true;
        sum += parseInt(str[i]);
        console.log("sum " + sum)
        
        //Check if sum is too high or too many ?s.
        if(sum > 10 || questionCount > 3){ 
          return false
        }
  
        if(sum == 10 && questionCount == 3){
          return true
        }
  
        //It found a number, so reset question count.
        questionCount = 0;
      }
  
      //CASE 2: IT FINDS A QUESTION MARK
      else if(str[i] == '?'){
        questionCount += 1
      }
    }
    //If it reaches the end of the for loop and hasn't found a solution, return false.
    return false
  }
  
  // some helpful functions
  parseInt('s') // returns NaN
  parseInt('5') // returns 5
  isNaN(NaN) // returns true
  isNaN(parseInt('9')) // returns false
  
  console.log(questionMarks('aaaaaa')); // should log NaN
  console.log(questionMarks('aa6?9')); // should log false
  console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
  console.log(questionMarks('?3?d?dad?7??????3')); // should log true
  console.log(questionMarks('7??????3')); // should log false
  /**
   * @param {string} str1
   * @param {string} str2
   * consisting of lowercase characters and backspaces (#)
   * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
   * BONUS: solve in O(n)
   */
  
  function backspaceStringCompare(str1, str2) {
    // your code here
  }
  
  console.log(backspaceStringCompare('ab#c', 'ad#c'));
  // should log true - they both become 'ac'
  
  console.log(backspaceStringCompare('ab##', 'c#d#'));
  // should log true - they both become ''
  
  console.log(backspaceStringCompare('a##c', '#a#c'));
  // should log true - they both become 'c'