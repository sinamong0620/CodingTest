function solution(array, commands) {
  var answer = [];
  commands.map((x) => {
    const [i, j, k] = x;
    answer.push(
      ...array
        .slice(i - 1, j)
        .sort((a, b) => a - b)
        .slice(k - 1, k)
    );
  });
  return answer;
}
