// [0 1 2 3]
// [A C G T]

class NucleotideCounts{
  constructor(){}

  static parse(dna){
    let resultArr = [0, 0, 0, 0];
    let result = '';

    if(dna == ''){
      return result = '0 0 0 0';
    }

    for(let n of dna){
      if(n == 'A'){
        resultArr[0]++;
      } else if(n == 'C'){
        resultArr[1]++;
      }else if(n == 'G'){
        resultArr[2]++;
      }else if(n == 'T'){
        resultArr[3]++;
      }else {
        throw new Error('Invalid nucleotide in strand');
      }
    }

    for(let i of resultArr){
      result += i + ' ';
    }
    return result.slice(0, result.length-1);
  }
}

export default NucleotideCounts;
