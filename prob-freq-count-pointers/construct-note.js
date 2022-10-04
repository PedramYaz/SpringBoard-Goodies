// add whatever parameters you deem necessary
function constructNoteHelper(str) {
  let frequencies = {};

  for (let val of str) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }
  return frequencies;
}

function constructNote(message, letters) {
  if (message.length > letters.length) return false;

  let messageFreq = constructNoteHelper(message);
  let lettersFreq = constructNoteHelper(letters);

  for (let char in messageFreq) {
    if (!lettersFreq[char]) return false;
    if (messageFreq[char] > lettersFreq[char]) return false;
  }
  return true;
}

module.exports = constructNote;
