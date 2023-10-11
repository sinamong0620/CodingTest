function solution(my_string, num1, num2) {
  var answer = [...my_string];
  var change_char = answer[num1];
  answer.splice(num1, 1, answer[num2]);
  answer.splice(num2, 1, change_char);
  return answer.join("");
}
