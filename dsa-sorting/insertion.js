/** Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

[ 5, 3, 4, 1, 2 ]
[ 3, 5, 4, 1, 2 ]
[ 3, 4, 5, 1, 2 ]
[ 1, 3, 4, 5, 2 ]
[ 1, 2, 3, 4, 5 ]

Insertion Sort Pseudocode:

Start by picking the second element in the array

Now compare the second element with the one before it and swap if necessary.

Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.

Repeat until the array is sorted.

*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];

    for (let j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

module.exports = insertionSort;
