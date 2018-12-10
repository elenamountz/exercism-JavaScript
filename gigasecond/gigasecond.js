// *10^3 to milliseconds 
export const gigasecond = (date) => new Date(date.getTime() + (1e9 * 1e3));
