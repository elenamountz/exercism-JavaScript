export default class Beer{
  constructor(){  }

  static verse(n){
    let lyric = '';

    if(n == 0){lyric += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;}
    else if (n == 1) {lyric += `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;}
    else if(n == 2) {lyric += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;}
    else {lyric += `${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around, ${n-1} bottles of beer on the wall.\n`;}
    return lyric;
  }

  static sing(from = 99, to = 0){
    let result = '';
    for(let i = from; i >= to; i--){
      result += this.verse(i) +`\n`;
    }
    return result.substr(0, result.length - 1);
  }
}
