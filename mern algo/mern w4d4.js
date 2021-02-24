// * @param {string} honorific
// * @param {string[]} fullNames
// * @returns {string[]} names with honorific applied
// * BONUS: use functional programming
// */

function addHonorificToFormattedNames(honorific, fullNames) {
    const newArr = [];
    const newStr = '';
    let lastName ='';
    let firstName='';
    for(let i = 0; i<fullNames.length; i++) {
        for(let j = 0; j<fullNames[i].length-1; j++){
            if(fullNames[i] != ','){
                
            }
            
            newArr.push(honorific + firstName + lastName);
        }
    }
    return newArr;
}

console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
// should log ['Mr. Bob Smith', 'Mr. Mike Jones']

console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
// should log ['Mrs. Beth HorseDoctor']


/**
* @param {string} v1
* @param {string} v2
* @returns {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
*/

function compareVersions(v1, v2) {
 // your code here
}

console.log(compareVersions('0.1', '1.0')); // should log -1
console.log(compareVersions('1.0.1', '1.0')); // should log 1
console.log(compareVersions('2.0', '2.0.0')); // should log 0