function solution(my_string) {
  var answer = [...my_string];
  answer = answer.map((num) => Number(num));
  answer = answer
    .filter((num) => num >= 0)
    .sort((a, b) => {
      return a - b;
    });

  return answer;
}
