export default class Triangle{
  constructor(number){
    this.number = number;
    this.rows = this.getRows();
    this.lastRow = this.getLastRow();
  }
  getRows(){
    const rowsArray = [];
    let arr = []; // arr -> temporary array

    for(let i = 1; i <= this.number; i++){
      arr = [];
      if(i == 1) arr.push(1); // [[1]]
      else if(i == 2) arr.push(1,1); // [[1], [1,1]]
      else {
        for(let j = 1; j <= i; j++){
           // First and last element of each row is 1.
          if(j == 1 || j == i) arr.push(1);
          else{
            /* Every intermediate element of each row, is the sum of
             * the right and the left element, from the previous row.
             * The line below, uses the [i-2] and [j-2],[j-1] elements,
             * instead of [i-1] and [j-1],[j] ones.
             * This happens because the loops started from 1, instead of 0.
             */
            arr.push(rowsArray[i-2][j-2] + rowsArray[i-2][j-1]);
          }
        }
      }
      rowsArray.push(arr);
    }
    return rowsArray;
  }
  getLastRow(){
    return this.rows[this.number - 1];
  }
}
