export const toRna = (dna) => {
  let rna = '';
  if(dna == ''){
    return '';
  }
  for(let i of dna){
    if(i == 'G'){
      rna += 'C';
    } else if(i == 'C'){
      rna += 'G';
    } else if(i == 'T'){
      rna += 'A';
    } else if(i == 'A'){
      rna += 'U';
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return rna;
};
