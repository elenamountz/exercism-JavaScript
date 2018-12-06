const abc = 'abcdefghijklmnopqrstuvwxyz';
const def = 'defghijklmnopqrstuvwxyzabc';
const LENGTH = abc.length;

export class Cipher{
  constructor(key){
    if(typeof key == 'undefined'){
      this.key = Array.from({length: 100}, () => abc.charAt(Math.floor(Math.random() * abc.length))).join('');
    } else if(!key.match(/^[a-z]+$/)){
      throw new Error('Bad key');
    } else {
      this.key = key;
    }
  }

  toMatch(regex){
    return this.key.test(regex);
  }
  
  encode(str){
    if(str.length > this.key.length){
      let num = Math.floor(str.length/this.key.length);
      for(let i = 0; i < num; i++){
        this.key += this.key;
      }
    }
    let result = '';
    for(let i = 0; i < str.length; i++){
      result += def.charAt((abc.indexOf(str[i]) + def.indexOf(this.key[i])) % LENGTH);
    }
    return result;
  }

  decode(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
      let tempValue = (def.indexOf(str[i]) - abc.indexOf(this.key[i]));
      if(tempValue < 0){
        tempValue += LENGTH;
      }
      result += def.charAt(tempValue % LENGTH);
    }
    return result;
  }
}
