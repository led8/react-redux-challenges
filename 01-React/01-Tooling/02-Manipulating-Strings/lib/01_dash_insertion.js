function isConsonant(letter) {
  return !letter.match(/[aeiouy\s]/i);
}

function insertDash(word) {
  if (!word || word.length === 0) {
    return "";
  }
  return word.split("").map((letter, i, letters) => {
    if (i > 0 && isConsonant(letters[i - 1]) && isConsonant(letter)) {
      return `-${letter}`;
    }
    return letter;
  }).join("");
}
console.log(insertDash("hello"));

module.exports = insertDash;
