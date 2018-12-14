export default class Sieve{
  constructor(number){
    this.number = number;
    this.list = Array.from(Array(this.number - 1), (value, index) => index+2);
    this.primes = this.findPrimes();
  }
  findPrimes(){
    const nonPrimes = [];

    // If element is marked(nonPrime), go to the next one
    for(let element of this.list){
      if(nonPrimes.includes(element)) continue;

      // For every unmarked(prime), find multipliers(nonPrimes) and mark them
      for(let multiplier = 2; element * multiplier <= this.number; multiplier++){
        nonPrimes.push(element * multiplier);
      }
    }
    // Primes are list elements that are not included in the nonPrime array
    return this.list.filter(element => !nonPrimes.includes(element));
  }
}
