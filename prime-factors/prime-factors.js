export const primeFactors = (number) => {
  const factors = [];
  for(let devisor = 2; devisor <= number; devisor++){
    while(number % devisor === 0){
      factors.push(devisor);
      number /= devisor;
    }
  }
  return factors;
};
