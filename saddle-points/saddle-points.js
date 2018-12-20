/* The code for getRows() and getColumns() is reused
 by the matrix project (previous exercise).
*/

export default class Matrix{
  constructor(str){
    this.str = str.split('\n ').join('\n');
    /* In 3rd test there is a space between \n and next number,
     which occurs an error. The line above this comment removes
     that space and fixes the error.
    */
    this.rows = this.getRows();
    this.columns = this.getColumns();
    this.saddlePoints = this.getSaddlePoints();
  }
  getRows(){
    return this.str.split('\n')
    .map(element => element
      .split(' ')
      .map(element => parseInt(element))
    );
  }
  getColumns() {
    return this.rows
    .map((item, index, array) => array
      .map(element => element[index])
    );
  }
  getSaddlePoints(){
    let saddlePoints = [];

    for(let i of [...this.rows]){
      const possibleX = Math.max(...i);
      const indexOfPossibleX = this.rows.indexOf(i);

      for(let j of this.columns){
        if(j.includes(possibleX) && possibleX == Math.min(...j)){
          const possibleY = possibleX;
          const indexOfPossibleY = this.columns.indexOf(j);
          saddlePoints.push([indexOfPossibleX,indexOfPossibleY]);
        }
      }
    }
    return saddlePoints;
  }
}
