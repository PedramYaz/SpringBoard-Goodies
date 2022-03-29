// 1. hasOddNumber
function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    })
}

// 2. hasAZero
function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === '0';
    });
}
// used '.toString()' to convert the number that we input into the haAZero function into a string. We then use '.split('')' function to to split the string into an array of substrings.
// we then run '.some' on the split string to see if there is a '0' in the number


// 3. hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    });
}
//same logic as the hasOddNumbers function, but instead of some, we use every since we want them all to be odd numbers instead of just one.

// 4. hasNoDuplicates
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
//function accpets an array, returns the array with the '.every' command being used, runs the callback and only returns true if the array, with the indexOf the value is equal to the last indexOf the value

// 5. hasCertainKey
function hasCertainKey(array, key){
    return array.every(function(val){
        return key in val;
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

//function that accepts an array and a key, ran '.every' to make sure they all turn out true before it returns true, and we return the key in the val that we input.

//6. hasCertainValue
function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    });
}
