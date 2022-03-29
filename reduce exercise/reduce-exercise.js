// 1. extractValue

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]


function extractValue(arr, key){
    return arr.reduce(function(val, next){
        val.push(next[key]);
        return val;
    }, []);
}

// 2. vowelCount
function vowelCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(acc, next){
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++
            } else {
                acc[lowerCased] =1;
            }
        }
        return acc;
    }, {});
}

// 3. addKeyAndValue
function addKeyAndValue(arr, key, val){
    return arr.reduce(function(acc, next, idx){
        acc[idx][key] = val;
        return acc;
    }, arr);
}

// 4. partition
function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if(cb(next)){
            acc[0].punch(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []]);
}