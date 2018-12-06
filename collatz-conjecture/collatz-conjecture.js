export const steps = (n) => {
  if(n <= 0){
    throw new Error('Only positive numbers are allowed');
  }
  const iteration = (number, step = 0) => {
    if(number === 1) return step;
    return number % 2 === 0 ? iteration(number / 2, step + 1) : iteration((3 * number) + 1, step + 1);
  };
  return iteration(n);
};
