/**
 * @param {string} str the input string
 * @returns {number} the length of the longest substring with distinct (non-repeating) characters
 */

function lengthOfLongestSubstring(str) {
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;

    let charSet = new Set();

    while (b_pointer < str.length) {
        if (!charSet.has(str.charAt(b_pointer))) {
            charSet.add(str.charAt(b_pointer));
            b_pointer++;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++;
        }
    }

    return max;

}

console.log(lengthOfLongestSubstring('abcabcbb'));
  // should log 3: 'abc'

console.log(lengthOfLongestSubstring('bbbbb'));
  // should log 1: 'b'

console.log(lengthOfLongestSubstring('pwwkew'));
  // should log 3: 'wke'
  
  
  /**
   * @param {string} str1
   * @param {string} str2
   * @returns {boolean}
   * Ignoring case, can the characters from string 2 build string 1?
   */
  
  function canBuildString1FromString2(str1, str2) {
    // your code here
  }
  
  'HELLO'.toLowerCase(); // returns 'hello'
  
  console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
  console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
  console.log(canBuildString1FromString2('hello', 'helo')); // should log false
  console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true
  
  
  /**
   * @param {number} hours
   * @param {number} minutes
   * @returns {string}
   */
  
  function timeInWords(hours, minutes) {
    // your code here
  }
  
  console.log(timeInWords(5, 15)); // should log 'quarter past five'
  console.log(timeInWords(5, 30)); // should log 'half past five'
  console.log(timeInWords(5, 40)); // should log 'twenty minutes to six'
  console.log(timeInWords(5, 45)); // should log 'quarter to six'
  console.log(timeInWords(12, 0)); // should log `twelve o'clock`
  console.log(timeInWords(23, 28)); // should log 'twenty eight minutes past twenty three'
  console.log(timeInWords(23, 45)); // should log 'quarter to zero'