export const hey = (message) => {
  let answer = '';
  message = message.trim();
  const onlyLetters = message.match(/[a-z]/i);
  const isQuestion = message.endsWith('?');

  if(isQuestion){
    if(message.toUpperCase() == message && onlyLetters) {answer += "Calm down, I know what I'm doing!";}
    else {answer += 'Sure.';}
  }
  else {
    if(message == '') {answer += 'Fine. Be that way!';}
    else if(message.toUpperCase() == message && onlyLetters) {answer += 'Whoa, chill out!';}
    else {answer += "Whatever.";}
  }
  return answer;
};
