/**
 * Filters an array of objects by a provided string value.
 * 
 * @param {object[]} arr array of objects
 * @param {string} searchFor the string to find
 * @param {string} searchBy the key string in which to search
 * @returns {object[]} array of objects whose relevant value starts with the searchFor string
 */

function filterByKey(arr, searchFor, searchBy) {
    // your code here
}

const arr1 = [
    {
    firstName: 'John',
    lastName: 'Roberts'
    },
    {
    firstName: 'Mike',
    lastName: 'Jones'
    }
];

// console.log(
//     filterByKey(
//     arr1,
//       'Joh',
//       'firstName'
//     )
//   );
  // should log [{ firstName: 'John', lastName: 'Roberts' }]
//   console.log(
//     filterByKey(
//       arr1,
//       'ohn',
//       'firstName'
//     )
//   );
  // should log []; John contains "ohn," but doesn't start with it


const FriendSchema = {
    firstName: String,
    lastName: String,
    isSocialDistancing: Boolean,
    isInfected: Boolean
};

const PersonSchema = {
    firstName: String,
    lastName: String,
    friends: [FriendSchema],
    isSocialDistancing: Boolean
};

/**
   * Finds those people who are at risk of contracting Covid-19.
   * 
   * @param {Object[]} persons an array of person objects
   * @returns {string[]} the people (full-name string) who are risk
   * A person is at risk if
   * 1. not practicing social distancing AND
   * 2. has a friend who is infected
   * BONUS: use functional programming
   */

function getAtRiskPeople(persons) {
    // your code here
    let newArray =[];
    for(var i=0; i<persons.length; i++)
        if(persons[i].isSocialDistancing ==false){
            for(var j=0; j<persons[i].friends.length; j++){
                if(persons[i].friends[j].isInfected){
                    newArray.push(persons[i]);
                    break;
            }
            return newArray;

}

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
  };
  
  const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
];

//   console.log(getAtRiskPeople(people));
  // should log ['Person One', 'Person Three']


/**
   * Returns a list of naughty people.
   * @param {Object[]} people an array of person objects
   * @param {string} habit a habit that makes a person naughty
   * @returns {string[]} an array of full names of those who are naughty
   * BONUS: use built-in methods to create a streamlined solution
   */


function getSantasNaughtyList(people, habit) {
    // your code here
        var newArray =[];
        for(var i=0; i< people.length; i++){
            for(var j=0; j < people[i].length; j++){
                if(people[i].habits[j] ==habit){
                    newArray.push(people[i]);
                    break;
                }
            }
        }
        return newArray;
    }

    const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"]
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"]
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"]
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"]
    }
];

console.log(getSantasNaughtyList(people, `doesn't wash dishes`));
  // should log ['FN1 LN1', 'FN3 LN3']

console.log(getSantasNaughtyList(people, 'shows up late'));
  // should log ['FN2 LN2', 'FN3 LN3']

