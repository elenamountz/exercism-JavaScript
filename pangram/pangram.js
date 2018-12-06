const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = Array.from(alphabet);

export const isPangram = (sentence) => {
  let existingLetters = Array.from(sentence.toLowerCase())
  .filter((letter) => letter != ' ' && letter.match(/[a-z]/));
  const unique = new Set(existingLetters);
  return unique.size == alphabet.length;
};
