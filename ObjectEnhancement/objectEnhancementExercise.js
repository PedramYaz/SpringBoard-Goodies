// 1. Same keys and values

// convert this to ES2015:

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    };
}

// 2. computed property names

//convert this to ES2015:

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
    firstName: 'colt',
    [favoriteNumber]: 'that is my favorite number'
}


// 3. object methods

//convert this to ES2015

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  // 4. createAnimal function

  function createAnimal(species, verb, noise){
      return {
          species,
          [verb](){
              return noise;
          }
      }
  }