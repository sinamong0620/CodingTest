function solution(score) {
  var answer = [];
  var a = score.reduce((acc, cur) => {
    acc.push((cur[0] + cur[1]) / 2);
    return acc;
  }, []);

  var c = [...a];
  c = c.sort((a, b) => b - a);

  for (let i of a) {
    const idx = c.indexOf(i);
    answer.push(idx + 1);
  }
  return answer;
}
