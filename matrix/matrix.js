export class Matrix {
  constructor(str){
    this.str = str;
    this.rows = this.getRows();
    this.columns = this.getColumns();
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
}
