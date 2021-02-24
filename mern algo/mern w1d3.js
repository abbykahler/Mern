function combineSortedArrays(arr1, arr2) {
    var newArr= [];
    var i = 0;
    var j = 0;
    while ( i < arr1.length && j < arr2.length ){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i++]);
        }
        else{
            newArr.push(arr2[j++]);
        }
        
    }
    if (arr1.length >= arr2.length){
        newArr.push(arr1[i]);
        
    }
    else{
        newArr.push(arr2[j]);
    }
    return newArr;
}
console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
   // should log [1, 2, 3, 4, 5, 6]
console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1],[])); // should log [1]