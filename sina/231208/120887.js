function solution(i, j, k) {
  var answer = 0;
  const a = Array.from({ length: j - i + 1 }, (_, l) => l + i);
  for (let i of a) {
    const b = [...i.toString()];
    const findArray = b.filter((a) => a === k.toString());
    answer += findArray.length;
  }
  return answer;
}
