const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default class Diamond{
  constructor(){}

  makeDiamond(letter){
    const diamond = [];
    const indexOfLetter = alphabet.indexOf(letter);
    let middleSpace = ' ';
    const edgeSpace = ' '.repeat(indexOfLetter);
    const indexOfLastRow = 2 * indexOfLetter;

    for(let i = 0; i <= indexOfLastRow; i++){
      /*
       * First row of each diamond is the letter A
       * with spaces left and rigth.
       * The number of spaces is equal to
       * the index of the input letter in alphabet.
       */
      if(i == 0){
        diamond[i] = `${edgeSpace}${alphabet[i]}${edgeSpace}\n`;
      }
      /*
       * For each row, until the middle one
       * (which is the row with the input letter),
       * reduce the spaces left and right by 1
       * and increase the intermediate spaces by 2.
       */
      else if(i <= indexOfLetter){
        diamond[i] = `${edgeSpace.slice(0,-i)}${alphabet[i]}${middleSpace}${alphabet[i]}${edgeSpace.slice(0,-i)}\n`;
        middleSpace += ' '.repeat(2);
      }
      /*
       * Every diamond kata is symmetric.
       * Once the half diamond is created,
       * every row after middle one is equal
       * to another one.
       */
      else {
        diamond[i] = diamond[indexOfLastRow % i];
      }
    }
    return diamond.join('');
  }
}
