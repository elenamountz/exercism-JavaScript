const maxHours = 24;
const maxMinutes = 60;

const putZero = (number) => number < 10 ? `0${number}` : number;

const at = (hours, minutes = 0) => {
  if(minutes >= maxMinutes || minutes < 0){
    const overMinutes = Math.floor(minutes / maxMinutes);
    const remainMinutes = minutes % maxMinutes;
    hours += overMinutes;
    minutes = remainMinutes;
    minutes < 0 ? minutes += maxMinutes : minutes;
  }
  if(hours >= maxHours || hours < 0){
    const remainHours = hours % maxHours;
    hours = remainHours;
    hours < 0 ? hours += maxHours : hours;
  }
  const time = `${putZero(hours)}:${putZero(minutes)}`;
  return{
    toString: () => time,
    plus: (number) => at(hours, minutes + number),
    minus: (number) => at(hours, minutes - number),
    equals: (aTime) => time == aTime
  };
};

export default at;
