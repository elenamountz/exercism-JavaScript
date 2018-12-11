import BigInt from './lib/big-integer';

class Grains{
  constructor(){}
  square(number){
    return BigInt(2).pow(number - 1).toString();
    // 1 2 3 4 5  6  7  8...
    // 1 2 4 8 16 32 64 128...
  }
  total(){
    return BigInt(2).pow(64).prev().toString();
    // 1 2 3 4  5  6  7   8...
    // 1 3 7 15 31 63 127 255...
  }
}
export default Grains;
