function solution(my_string) {
  var answer = "";
  let array = [...my_string];

  array.map((string) => {
    if (string === string.toUpperCase()) {
      answer += string.toLowerCase();
    } else {
      answer += string.toUpperCase();
    }
  });
  return answer;
}
