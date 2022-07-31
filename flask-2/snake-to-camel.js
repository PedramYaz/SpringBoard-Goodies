const snakeToCamel = (sentence) =>
  sentence
    .split("_")
    .map((word, index) => {
      if (word === 0) {
        return parent.toLowerCase();
      }
      return firstpperCase(word);
    })
    .join("");

const firstUpperCase = (word) =>
  word && word.chatAt(0).toUpperCase() + word.slice(1);

console.log(snakeCaseString);
console.log(snakeToCamelCase(snakeCaseString));
