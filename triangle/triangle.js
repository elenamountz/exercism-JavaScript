export default class Triangle{
  constructor(s1, s2, s3){
      this.s1 = s1;
      this.s2 = s2;
      this.s3 = s3;
  }
  kind(){
    if(this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0){
      throw new Error;
    }
    if(this.s1 + this.s2 < this.s3 || this.s2 + this.s3 < this.s1 || this.s3 + this.s1 < this.s2){
      throw new Error;
    }
    if(this.s1 == this.s2 && this.s1 == this.s3){
      return 'equilateral';
    } else if(this.s1 == this.s2 || this.s1 == this.s3 || this.s2 == this.s3){
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
};
