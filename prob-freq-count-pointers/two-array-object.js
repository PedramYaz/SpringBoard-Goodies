/**
convert the keys array into an object using array.reduce

In the reduce callback function, set the current value as a key in teh accumulator object, with the value set to whatever element s at the current index in the values array.
 */

// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  return keys.reduce((obj, cur, idx) => {
    obj[cur] = idx < values.length ? values[idx] : null;
    return obj;
  }, {});
}

module.exports = twoArrayObject;
