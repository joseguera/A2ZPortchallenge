function longestWord(sentence) {
  // Cleans the input string of spaces, commas/periods and non-Enlgish characters as well as converting it into an array
  const newSentence = sentence
    .toLowerCase()
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replace(/[^\x00-\x7F]/g, "")
    .split(" ");

  // Checks the array to make sure the input has at least two words (one word is not a sentence)
  if (newSentence.length < 2) {
    console.log("Sentence must have at least two words.");
    return;
  }

  // Variables to keep track of the longest word as well as the word with the most vowels (in case of a tie)
  let longest = "";

  // Loops through the sentence array comparing the length of each string to one another
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i].length > longest.length) {
      longest = newSentence[i];
    } else if (newSentence[i].length == longest.length) {
      /* If two words are the same length, they will be entered into the vowelCount() function
          - Their results will be compared and the one with most vowels will be saved in the longest variable
      */
      const vowelCount = (string) =>
        [...string].filter((v) => "aeiou".includes(v)).length;
      let string1 = vowelCount(newSentence[i]);
      let string2 = vowelCount(longest);
      longest = string1 > string2 ? newSentence[i] : longest;
    }
  }
  return longest;
}

// Two strings with same length, but different vowel amount
console.log(
  longestWord(
    "Smart people learn from everything and everyone, average people from their experiences., stupid people already have all the answers."
  )
);

// Ignores any character that is not an English letter or space
console.log(
  longestWord(
    "Smart, people, learn, from приветeverythingمرحبا, and everyone. "
  )
);

console.log(longestWord("Smart"));
