const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

// 1. findUserByUsername
function findUserByUsername(arr, username){
    return arr.find(function(name){
        return name.username === username;
    });
}

// 2. removeUser
function removeUser(arr, username){
    let foundIndex = arr.findIndex(function(name){
        return name.username === username;
    })
    if(foundIndex === -1) return;
    return arr.splice(foundIndex, 1)[0];
}

// removing a user, function accepts an arry and a username, aka a string
// we create a variable that is equal to the array.findIndex, we want to find the index of the result of the function. 
// the function returns a the line and name of the person we specify in the str
// after the callback we go back and if the index that was returned from findIndex is equal to -1, we leave it be. If it is not equal to -1, we return the array with the line removed.
