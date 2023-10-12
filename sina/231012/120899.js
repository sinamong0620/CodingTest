function solution(array) {
  var answer = [Math.max(...array)];
  var index = array.findIndex((index) => index === answer[0]);
  answer.push(index);
  return answer;
}
