// 1. object destructuring 1
// what does the following code print/return?


let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// 2. object destructing 2
// what does the following code print/return?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); 
  // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


  // 3. object destructing 3
  //what does the following code print/return?

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
  // 'Your name is Alejandro, and you like purple
  getUserData({firstName: "Melissa"}) 
  // 'Your name is Melissa and you like green'
  getUserData({}) 
  // 'Your name is undefined and you like green'
  


// 4. Array destructuring 1
// what does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);
// 'Maya'
console.log(second);
// 'Marisa'
console.log(third);
// 'Chi'


// 5. Array destructuring 2
// what does the following code return/print

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
console.log(raindrops);
// 'raindrops on roses'
console.log(whiskers);
// 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings);
// ['bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with string']



//6. array destructuring 3
// what does the following code return/print

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers);
// [10, 30, 20]


// ES2015 refractoring 
//7. assigning variables to object properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

 const {a, b} = obj.numbers;


// 8. array swap

var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]


// 9. raceResults()
//write a function called raceResults which accepts a single array arg. It should return an object with the keys first, second, third and rest.

raceResults = (['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

  