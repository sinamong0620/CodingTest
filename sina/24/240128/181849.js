function solution(num_str) {
  let answer = 0;
  [...num_str].map((num) => (answer += Number(num)));
  return answer;
}
