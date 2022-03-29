// const values = [1, 2, 3];
// const values2 = [5, 1, 2, 3, 10];

// values.forEach(function(value){
//     return value * 2;
// });


//forEach

// 1. doubleValues

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}
// creates a function called doubleValues that accepts an 'arr' input
// in the function we made a new variable that equals an empty, new array
// ran .forEach on the user array input, that has a function that accepts a value
// we take the value that we accepted from the inputed array, multiplied it by 2 and pushed it into the empty newArr
// once that all happened, we returned the newArr that contained all the new values


// 2. onlyEvenValues
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
};
//simply took the values of the inputed array, dividided it by 2, and if the remainder was 0, it pushed it into the newArr

// 3. showFirstAndLast
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length -1]);
    });
    return newArr;
}
// took the inputed array, pushed the 0th index value of the first string in the arry and pushed it, and also pushed the last index value -1 of the array 


// 4. addKeyAndValue
function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}
// create a function called addKeyAndValue, which accepts an array, a key and a value (all seperate)
// it than runs .forEach through the array and it accepts a val
// it than takes the index of 

// 5. vowelCount
function vowelCount(str){
    const vowels = 'aeiou';
    let splitArr = str.split('');
    let obj = {};

    splitArr.forEach(function(letter){
        let lowerCaseLetter = letter.toLowerCase();
        if(vowels.indexOf(lowerCaseLetter) !== -1){
            if(obj[lowerCaseLetter]){
                obj[lowerCaseLetter]++;
            } else {
                obj[lowerCaseLetter] = 1;
            }
        }
    });
    return obj;
}
// made a function called vowelCount that accepts a string
// created a constant with all the vowels that we are looking for in the string
// creted a varibale by the name splitArr that is equal to the inputted string that is being split 
// made a variable named object that is empty
// we take out splitArr variable, pass through it with forEach, insert a function with the input of letter.
// variable named lowerCaseLetters, which is equal to lowercasing the word that we input
// write an if statement, that if the variable vowels, is in the word that is now lowercased, and does NOT equal -1, we make aother if statement that takes the obj with the index o lowerCaseLetters and adds it to the the object. else the object equals 1.
//return the new obj


//MAP

// 1. doubleValuesWithMap

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2;
    });
}
// made a function that accepts an array as the input
// i am returning the inputed array that is being mapped through and is attached to a function that accepts a value from said array
// we are taking the value and multiplying it by 2 and returning it\

// 2. valTimesIndex
function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    });
}
// function that accepts an array
// returning, the array that is being mapped through, with a function that accepts the values of the array and their index locations
// returning the value * their index

// 3. extractKey
function extractKey(arr, key){
    return arr.map(function(name){
        return name[key];
    });
}
// function that accepts an array and a key
// returns the mapping of the unputted array, attached to a function that takes names in the inpput from the array
// returns the name at that index of keys

// 4. extractFullName
function extractFullName(arr){
    return arr.map(function(name){
        return name.first + ' ' + name.last;
    });
}
// write a function that accepts an array
// returning the mapping of the array that is attached to a function that accepts a name 
// returns the 'first' part of the name and the 'last' with a space inbetween

// FILTER

// 1. filterByValue
function filterByValue(arr, key){
    return arr.filter(function(name){
        return name[key] !== undefined;
    });
}
// function that accepts an array and a key
// filtering through the array and inputing the 'names'  in the function callback
// returning the name with the index of key that is NOT equal to undefined

// 2. find
function find(arr, val){
    return arr.filter(function(number){
        return number === val;
    })[0];
}
// function that accepts an array and a value
// run filter on the array and a callback function that takes a number as the input
// return the number if it is equal to the value only for the 0th index, no more

// 3. findInObj
function findInObj(arr, key, val){
    return arr.filter(function(name){
        return name[key] === val;
    })[0];
}
// function that accepts an array, a key and a value
// filtering through the array
// returning the name that contains the [key] and it has to be equal to the val. Only the first one that fills the [0]th index of the new array

// 4. removeVowels
function removeVowels(str){
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(nonVowels){
        return vowels.indexOf(nonVowels) === -1;
    }).join('');
}
// function that accepts a strring
// const that signifies what the vowels are
// return the initial str, convert it to lowercase, split it, and filter it
// return, if the variable vowels are in the (nonVowels) and it is equal to -1, return it
// and undo the split with .join('')

// 5. doubleOddNumbers
function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val * 2;
    });
}
// function that accepts an array
// return the arr and filter through it
// return the values that when divided by 2 do NOT equal 0, so only the odd numbers
// map through those values and make another function where the values are input into and return them doubled