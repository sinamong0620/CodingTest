function solution(my_string, is_suffix) {
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    const a = [...my_string].slice(i, my_string.length).join("");
    if (a === is_suffix) {
      answer = 1;
      break;
    }
  }
  return answer;
}
