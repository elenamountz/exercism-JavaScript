const abc = 'abcdefghijklmnopqrstuvwxyz';
// -------- 'zyxwvutsrqponmlkjihgfedcba'
const zyx = abc.split('').reverse().join('');

const change = (letter) => zyx.charAt(abc.indexOf(letter));

export const encode = (plaintext) => {
  let ciphertext = '';
  let plain = plaintext.toLowerCase().replace(/[^a-z0-9]/gi,'');
  let counter = ciphertext.length;

  for(let letter of plain){
    if(counter % 5 == 0 && ciphertext.length != 0){
      ciphertext += ' ';
    }
    if(letter.match(/\d/)) ciphertext += letter;
    if(letter.match(/\w/)) ciphertext += change(letter);
    counter++;
  }
  return ciphertext;
}
