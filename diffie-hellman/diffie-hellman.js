export class DiffieHellman {

  // p and g have to be greater than 1 and prime numbers
  // Otherwise, a new error must be thrown
  constructor(p, g){
    if(p < 1 || g < 1){
      throw new Error();
    } else if(!(this.isPrime(p)) || !(this.isPrime(g))){
      throw new Error();
    } else {
      this.p = p;
      this.g = g;
    }
  }

  // Check if the input is a prime number
  isPrime(number){
    for(let i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      }
    }
    return number !== 1 && number !== 0;
  }
  // Generate public key using the private one
  getPublicKeyFromPrivateKey(privateKey){
    if(privateKey > 1 && privateKey < this.p){
      return Math.pow(this.g, privateKey) % this.p;
    }
    throw new Error();
  }
  // Calculate Alice's and Bob's shared secret key
  // The shared secret key is the same for both of them
  getSharedSecret(privateKey, publicKey){
    return Math.pow(publicKey, privateKey) % this.p;
  }
}
