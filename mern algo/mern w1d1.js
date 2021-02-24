/**
 * Sorts an array by comparing adjacent values and swapping.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 * BONUS: fast exit if portion already sorted
 */

// function bubbleSort(arr) {
    function bubbleSort(Arr) {
        var len = Arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (Arr[j] > Arr[j + 1]) {
                    var temp = Arr[j];
                    Arr[j] = Arr[j + 1];
                    Arr[j + 1] = temp;
                }
            }
        }
        return Arr;
    }
    
    console.log(bubbleSort([12, 3, 4, 6, 2, 8, ]));
//   }

//   console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
    
//   // should log [1, 2, 3, 4, 5, 8]
  
  
  /**
   * Sorts an array by cycling through and selecting the minimum value.
   * 
   * @param {number[]} arr an UNSORTED array of numbers
   * @returns {number[]} the INPUT array (ie. sorts "in place")
   */

//   function selectionSort(arr) {
    function selectionSort(Arr) { 
        let num = Arr.length;
            
        for(var i = 0; i < num; i++) {
            var min = i;
            for(var j = i+1; j < num; j++){
                if(Arr[j] < Arr[min]) {
                    min=j; 
                }
            }
            if (min != i) {

                var temp = Arr[i]; 
                Arr[i] = Arr[min];
                Arr[min] = temp;      
            }
        }
        return Arr;
    }

console.log(selectionSort([1, 5, 2, 8, 3, 4]));





// console.log(bubbleSort([12, 3, 4, 6, 2, 8, ]));
// console.log(bubbleSort([1, 5, 2, 8, 3, 4]));

