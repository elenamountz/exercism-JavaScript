

class Allergies{
  constructor(score) {
    this.score = score;
  }

  list(){
    const items = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128
    };

    const allergiesArray = [];
    const allergyNames = Object.keys(items);
    const allergyScores = Object.values(items);

    if(this.score == 0){
      return [];
    }
    if(this.score > 256){
      this.score = this.score % 256;
    }
    for(let i = allergyScores.length-1; i >= 0; i--){
      if (this.score >= allergyScores[i]){
        allergiesArray.push(allergyNames[i]);
        this.score -= allergyScores[i];
      }
    }
    return allergiesArray.reverse();
  }

  allergicTo(aller){
    return this.list().includes(aller)
  }
}

export default Allergies;
