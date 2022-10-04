// add whatever parameters you deem necessary
function averagePair(array, target) {
  left = 0;
  right = array.length - 1;

  while (left < right) {
    let average = (array[left] + array[right]) / 2;

    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

module.exports = averagePair;
