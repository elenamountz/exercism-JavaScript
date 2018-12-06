export const isIsogram = (str) => {
  const letters= Array.from(str.toLowerCase())
  .filter((letter) => letter.match(/[a-z]/));
  const unique = new Set(letters);
  return unique.size == letters.length;
}
