export default class List{
  constructor(elements = []){
    this.elements = elements;
  }
  compare(listToCompare){
    const listOne = this.elements.join();
    const listTwo = listToCompare.elements.join();

    if(listOne === listTwo) return 'EQUAL';
    if(listTwo.includes(listOne)) return 'SUBLIST';
    if(listOne.includes(listTwo)) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}
