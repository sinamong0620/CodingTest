function solution(sides) {
  //첫 번째 경우
  var answer = 0;
  const a = Math.max(...sides) - Math.min(...sides);
  for (let i = a + 1; i <= Math.max(...sides); i++) {
    answer++;
  }

  //두 번째 경우
  for (
    let i = Math.max(...sides) + 1;
    i < Math.max(...sides) + Math.min(...sides);
    i++
  ) {
    answer++;
  }

  return answer;
}
