function disjunctiveUnion(arr1, arr2) {
    let newArray = [];
    //Check all values on arr1 vs arr2
    for(i=0; i < arr1.length; i++){
        for(j=0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]){
            break;
        }
        if(arr1[i] !== arr2[j] && j == arr2.length-1){
            newArray.push(arr1[i])
        } 
        }
    }
    for(i=0; i < arr2.length; i++){
        for(j=0; j < arr1.length; j++){
            if(arr2[i] == arr1[j]){
                break;
            }
        if(arr2[i] !== arr1[j] && j == arr1.length-1){
            newArray.push(arr2[i])
        } 
        }
    }
    return newArray;
}

console.log(disjunctiveUnion([1, 2], [2, 1]));
  // should log [] since 1 and 2 are in both

console.log(disjunctiveUnion([1, 2, 3], [1, 2, 4]));
  // should log [3]

console.log(disjunctiveUnion([1, 2, 3,7], [1, 2, 4,5]));